import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/root";
import ErrorPage from "./pages/errorPage";
import DigitalMarketing from "./pages/digital/digitalMarketing";
import GoogleMyBusinessRanking from "./pages/digital/googleMyBusinessRanking";
import OnPageSEO from "./pages/digital/OnPageSEO"; 
import OffPageSEO from "./pages/digital/OffPageSEO"; 
import SearchEngineOptimization from "./pages/digital/searchEngineOptimization";
import WebDevelopment from "./webdevelopment/webDevelopment";
import BusinessWebsite from "./webdevelopment/businessWebsite";
import DynamicWebsite from "./webdevelopment/dynamicWebsite";
import SeoWebsite from "./webdevelopment/seoWebsite";
import StaticWebsite from "./webdevelopment/staticWebsite";
import EcommerceWebsite from "./webdevelopment/ecommerce";
import TestimonialWebsite from "./webdevelopment/testimonialWebsite";
import GoAdsDigital from "./pages/goadsdigital";
import Contact from "./pages/contact";
import AboutUs from "./pages/aboutUs";
import GraphicDesigning from "./pages/graphic/graphicDesigning";


import BusinessCardDesign from "./pages/graphic/businessCardDesign";
import BrouchereDesign from "./pages/graphic/brouchereDesign";
import IDCardDesign from "./pages/graphic/IDCardDesign";
import PosterDesign from "./pages/graphic/posterDesign";
import UIUXDesign from "./pages/graphic/UIUXDesign";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <GoAdsDigital /> },
      { path: "digitalMarketing", element: <DigitalMarketing /> },
      { path: "webDevelopment", element: <WebDevelopment /> },
      { path: "graphicDesigning", element: <GraphicDesigning /> },
      { path: "contact", element: <Contact /> },
      { path: "aboutUs", element: <AboutUs /> },
    ],
  },
  { path: "onPageSEO", element: <OnPageSEO /> },
  { path: "searchEngineOptimization", element: <SearchEngineOptimization /> }, // Corrected path
  { path: "offPageSEO", element: <OffPageSEO /> },
  { path: "googleMyBusinessRanking", element: <GoogleMyBusinessRanking /> },
  { path: "businessWebsite", element: <BusinessWebsite /> },
  { path: "dynamicWebsite", element: <DynamicWebsite /> },
  { path: "seoWebsite", element: <SeoWebsite /> },
  { path: "ecommerce", element: <EcommerceWebsite /> },
  { path: "testimonialWebsite", element: <TestimonialWebsite /> },
  { path: "staticWebsite", element: <StaticWebsite /> },
  { path: "businessCardDesign", element: <BusinessCardDesign /> },
  { path: "brouchereDesign", element: <BrouchereDesign /> },
  { path: "IDCardDesign", element: <IDCardDesign /> },
  { path: "posterDesign", element: <PosterDesign /> },
  { path: "UIUXDesign", element: <UIUXDesign /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
