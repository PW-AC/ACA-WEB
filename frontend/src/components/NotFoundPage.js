import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-acencia-primary-900">
      <Header />
      <main id="main-content" role="main">
      <section className="u-section bg-acencia-primary-900">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
          <h1 className="text-6xl font-semibold text-white mb-4">404</h1>
          <p className="text-gray-300">Seite nicht gefunden.</p>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;

