import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TimeSeries from "./pages/TimeSeries";
import Forecasting from "./pages/Forecasting";
import Anomaly from "./pages/Anomaly";
import Clustering from "./pages/Clustering";
import Patterns from "./pages/Patterns";
import Recommendations from "./pages/Recommendations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/time-series" element={<TimeSeries />} />
          <Route path="/forecasting" element={<Forecasting />} />
          <Route path="/anomaly" element={<Anomaly />} />
          <Route path="/clustering" element={<Clustering />} />
          <Route path="/patterns" element={<Patterns />} />
          <Route path="/recommendations" element={<Recommendations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
