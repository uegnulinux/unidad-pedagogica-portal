import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthError } from "@supabase/supabase-js";

const AuthPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const getErrorMessage = (error: AuthError) => {
    switch (error.message) {
      case "Invalid login credentials":
        return "Credenciales inválidas. Por favor, verifica tu email y contraseña.";
      case "Email not confirmed":
        return "Por favor, verifica tu dirección de email antes de iniciar sesión.";
      case "User not found":
        return "No se encontró ningún usuario con estas credenciales.";
      default:
        return error.message;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            Sistema de Gestión Educativa
          </CardTitle>
        </CardHeader>
        <CardContent>
          {errorMessage && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="light"
            providers={[]}
            localization={{
              variables: {
                sign_in: {
                  email_label: "Email",
                  password_label: "Contraseña",
                  button_label: "Iniciar Sesión",
                },
                sign_up: {
                  email_label: "Email",
                  password_label: "Contraseña",
                  button_label: "Registrarse",
                },
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;