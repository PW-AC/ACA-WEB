import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const TokenSwatch = ({ label, varName }) => (
  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white">
    <div className="flex items-center space-x-3">
      <div style={{ width: 28, height: 28, borderRadius: 6, background: `var(${varName})` }} />
      <span className="text-sm text-gray-700">{label}</span>
    </div>
    <code className="text-xs text-gray-500">{varName}</code>
  </div>
);

const StyleguidePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" role="main" className="u-section">
        <div className="u-container space-y-10">
          <section>
            <h1 className="text-3xl font-heading" style={{ fontFamily: 'var(--font-display)' }}>Design Tokens</h1>
            <p className="text-sm text-gray-600">Zentrale Farb- und Typografie-Variablen.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <TokenSwatch label="Primary 900" varName="--color-primary-900" />
              <TokenSwatch label="Primary 400" varName="--color-primary-400" />
              <TokenSwatch label="Primary 50" varName="--color-primary-50" />
              <TokenSwatch label="Accent" varName="--color-accent" />
              <TokenSwatch label="Accent Hover" varName="--color-accent-hover" />
              <TokenSwatch label="Accent Active" varName="--color-accent-active" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-display)' }}>Typografie</h2>
            <div className="space-y-4 mt-4">
              <h1>Heading H1 – Tenor Sans</h1>
              <h2>Heading H2 – Tenor Sans</h2>
              <h3>Heading H3 – Tenor Sans</h3>
              <p className="text-body">Body – Open Sans 16–18px</p>
              <p className="text-caption">Caption – 12–14px</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-display)' }}>Buttons</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="btn-cta">Primary CTA</button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800">Secondary</button>
              <button className="text-accent underline">Tertiary Link</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StyleguidePage;

