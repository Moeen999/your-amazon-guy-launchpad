import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ResultsPage from "@/pages/ResultsPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";
import DesignPage from "./pages/DesignPage";
import FullServiceManagement from "./ServicesRoutes/FullServiceManagement";
import PpcManagement from "./ServicesRoutes/PpcManagement";
import AmazonSEO from "./ServicesRoutes/AmazonSEO";
import AccountAudit from "./ServicesRoutes/AccountAudit";
import Consulting from "./ServicesRoutes/Consulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/full-service-management" element={<FullServiceManagement />} />
              <Route path="/services/advertising-management" element={<PpcManagement />} />
              <Route path="/services/amazon-seo/" element={<AmazonSEO />} />
              <Route path="/services/amazon-account-audit" element={<AccountAudit />} />
              <Route path="/services/amazon-brand-growth-consulting" element={<Consulting />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/case-studies" element={<ResultsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services/design" element={<DesignPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
