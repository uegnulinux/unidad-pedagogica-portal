import { 
  Calendar, 
  ClipboardList, 
  GraduationCap, 
  Home, 
  Users,
  LogOut
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Horario", icon: Calendar, path: "/horario" },
  { title: "Asistencia", icon: ClipboardList, path: "/asistencia" },
  { title: "Actividades", icon: Users, path: "/actividades" },
  { title: "Cardex", icon: GraduationCap, path: "/cardex" },
];

export function AppSidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/auth");
      toast.success("Sesión cerrada exitosamente");
    } catch (error) {
      toast.error("Error al cerrar sesión");
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="h-[60px] flex items-center px-6">
        <img 
          src="/lovable-uploads/0183a877-ed63-438a-b21b-9fadf667aaaa.png" 
          alt="Logo" 
          className="h-12 w-auto"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menú Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => navigate(item.path)}>
                    <item.icon className="h-4 w-4 mr-2" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} className="text-red-600 hover:text-red-700">
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Cerrar Sesión</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}