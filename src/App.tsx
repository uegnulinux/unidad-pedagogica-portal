import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./integrations/supabase/client";
import Index from "./pages/Index";
import Horario from "./pages/Horario";
import Asistencia from "./pages/Asistencia";
import Actividades from "./pages/Actividades";
import Cardex from "./pages/Cardex";
import AuthPage from "./pages/Auth";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    checkAuth();

    return () => subscription.unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            }
          />
          <Route
            path="/horario"
            element={
              <ProtectedRoute>
                <Horario />
              </ProtectedRoute>
            }
          />
          <Route
            path="/asistencia"
            element={
              <ProtectedRoute>
                <Asistencia />
              </ProtectedRoute>
            }
          />
          <Route
            path="/actividades"
            element={
              <ProtectedRoute>
                <Actividades />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cardex"
            element={
              <ProtectedRoute>
                <Cardex />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;