import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Horario from "./pages/Horario";
import Asistencia from "./pages/Asistencia";
import Actividades from "./pages/Actividades";
import Cardex from "./pages/Cardex";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/horario" element={<Horario />} />
          <Route path="/asistencia" element={<Asistencia />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/cardex" element={<Cardex />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;