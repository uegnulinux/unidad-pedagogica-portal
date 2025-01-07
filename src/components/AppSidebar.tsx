import { 
  Calendar, 
  ClipboardList, 
  GraduationCap, 
  Home, 
  Users 
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

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Horario", icon: Calendar, path: "/horario" },
  { title: "Asistencia", icon: ClipboardList, path: "/asistencia" },
  { title: "Actividades", icon: Users, path: "/actividades" },
  { title: "Cardex", icon: GraduationCap, path: "/cardex" },
];

export function AppSidebar() {
  const navigate = useNavigate();

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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}