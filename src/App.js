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
import TestimonalWebsite from "./webdevelopment/testimonalWebsite";
import GoAdsDigital from "./pages/goadsdigital";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <GoAdsDigital /> },
      { path: "digitalMarketing", element: <DigitalMarketing /> },
      { path: "webDevelopment", element: <WebDevelopment /> },
      
    ],
  },
  { path: "onPageSEO", element: <OnPageSEO /> },
  { path: "SearchEngineOptimization", element: <SearchEngineOptimization /> },
  { path: "offPageSEO", element: <OffPageSEO /> },
  { path: "googleMyBusinessRanking", element: <GoogleMyBusinessRanking /> },
  { path: "businessWebsite", element: <BusinessWebsite /> },
  { path: "dynamicWebsite", element: <DynamicWebsite /> },
  { path: "seoWebsite", element: <SeoWebsite /> },
  { path: "ecommerce", element: <EcommerceWebsite /> },
  { path: "testimonalWebsite", element: <TestimonalWebsite /> },
  { path: "staticWebsite", element: <StaticWebsite /> },


 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
