import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import Error from "./layout/Error";
import { Outdent } from "lucide-react";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Disclaimer from "./pages/legal/Disclaimer";
import TermsOfService from "./pages/legal/TermsOfService";
import ContactUs from "./pages/contact/Contact";
import About from "./pages/legal/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="pages" element={<Outlet />}>
          <Route path="legal" element={<Outlet />}>
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="about-us" element={<About />} />
          </Route>
          <Route path="contact-us" element={<ContactUs/>}>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
