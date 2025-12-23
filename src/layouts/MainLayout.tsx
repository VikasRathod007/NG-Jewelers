import { Box } from "@mui/material";
import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import LoadingScreen from "@/components/ui/LoadingScreen";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
      <FloatingWhatsApp />
    </Box>
  );
};

export default MainLayout;
