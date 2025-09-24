import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ServiceTeamPage from "./components/ServiceTeamPage";
import ContactPage from "./components/ContactPage";

import PrivacyPage from "./components/PrivacyPage";
import ImprintPage from "./components/ImprintPage";
import EmployerObligationsPage from "./components/EmployerObligationsPage";
import GesetzlichePflichtenPage from "./components/GesetzlichePflichtenPage";
import AktuellesPage from "./components/AktuellesPage";
import DieBavPage from "./components/DieBavPage";
import DieBavPageY from "./components/DieBavPageY";
import BkvPage from "./components/BkvPage";
import BkvPageX from "./components/BkvPageX";
import BuvPage from "./components/BuvPage";
import BuvPageX from "./components/BuvPageX";
import { Toaster } from "./components/ui/toaster";
import NotFoundPage from "./components/NotFoundPage";
import StyleguidePage from "./components/StyleguidePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DieBavPage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/ueber-uns/service-team" element={<ServiceTeamPage />} />
          <Route path="/bav-rechtliche-grundlagen" element={<EmployerObligationsPage />} />
          <Route path="/die-bav" element={<DieBavPage />} />
          <Route path="/die-bav/y" element={<DieBavPageY />} />
          <Route path="/die-bav/aktuelles" element={<AktuellesPage />} />
          <Route path="/die-bav/gesetzliche-pflichten" element={<GesetzlichePflichtenPage />} />
          <Route path="/bkv" element={<BkvPage />} />
          <Route path="/bkv/x" element={<BkvPageX />} />
          <Route path="/buv" element={<BuvPage />} />
          <Route path="/buv/x" element={<BuvPageX />} />
          <Route path="/kontakt" element={<ContactPage />} />

          <Route path="/aktuelles" element={<AktuellesPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/datenschutzerklaerung" element={<PrivacyPage />} />
          <Route path="/impressum" element={<ImprintPage />} />
          <Route path="/styleguide" element={<StyleguidePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;