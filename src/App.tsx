import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { OnboardingProvider } from "@/contexts/OnboardingContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Videos from "./pages/Videos";
import OnboardingWelcome from "./pages/onboarding/OnboardingWelcome";
import OnboardingGoal from "./pages/onboarding/OnboardingGoal";
import OnboardingPlan from "./pages/onboarding/OnboardingPlan";
import OnboardingVault from "./pages/onboarding/OnboardingVault";
import OnboardingPayment from "./pages/onboarding/OnboardingPayment";
import OnboardingSuccess from "./pages/onboarding/OnboardingSuccess";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <OnboardingProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/recipes" element={<Navigate to="/resources?tab=recipes" replace />} />
            <Route path="/videos" element={<Navigate to="/resources?tab=videos" replace />} />
            <Route path="/onboarding" element={<OnboardingWelcome />} />
            <Route path="/onboarding/goal" element={<OnboardingGoal />} />
            <Route path="/onboarding/plan" element={<OnboardingPlan />} />
            <Route path="/onboarding/vault" element={<OnboardingVault />} />
            <Route path="/onboarding/payment" element={<OnboardingPayment />} />
            <Route path="/onboarding/success" element={<OnboardingSuccess />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </OnboardingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
