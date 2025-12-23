import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

const HomePage = lazy(() => import("@/pages/Home"));
const AboutPage = lazy(() => import("@/pages/About"));
const CategoriesPage = lazy(() => import("@/pages/Categories"));
const CustomDesignPage = lazy(() => import("@/pages/CustomDesign"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const FaqPage = lazy(() => import("@/pages/FAQ"));
const PortfolioPage = lazy(() => import("@/pages/Portfolio"));
const TestimonialsPage = lazy(() => import("@/pages/Testimonials"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "categories", element: <CategoriesPage /> },
        { path: "custom-design", element: <CustomDesignPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "faq", element: <FaqPage /> },
        { path: "portfolio", element: <PortfolioPage /> },
        { path: "testimonials", element: <TestimonialsPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
    future: {
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
    },
  },
);

export default router;
