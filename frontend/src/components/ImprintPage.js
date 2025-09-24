import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Scale, Building2, Mail, Phone } from "lucide-react";

const ImprintPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-acencia-primary-900">
      <Header />
      <main id="main-content" role="main">
      
      {/* Hero Section - Apple-like */}
      <section className="u-hero bg-acencia-primary-900">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
              <span className="text-acencia-accent">Impressum</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Rechtliche Angaben gemäß § 5 TMG
            </p>
            <p className="text-sm text-gray-400">
              Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="u-section bg-acencia-primary-900">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          {/* Company Information */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-acencia-accent" />
              </div>
              <h2 className="text-3xl font-semibold text-white tracking-tight">
                Allgemeine Daten
              </h2>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-gray-200 leading-relaxed space-y-2">
                <p><strong className="text-white">ACENCIA GmbH</strong></p>
                <p>Fasanenweg 5</p>
                <p>55546 Hackenheim</p>
                <br />
                <p><strong className="text-white">Geschäftsführer:</strong> Uwe Weimert</p>
                <br />
                <p><strong className="text-white">Registergericht:</strong> Amtsgericht Mainz</p>
                <p><strong className="text-white">Registernummer:</strong> HRB 51014</p>
                <p><strong className="text-white">USt-IdNr.:</strong> DE365950951</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-acencia-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Kontakt
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-acencia-accent" />
                  <div>
                    <p className="font-medium text-white">E-Mail</p>
                    <a href="mailto:info@acencia.de" className="text-acencia-accent hover:text-acencia-accent-hover transition-colors duration-150">
                      info@acencia.de
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-acencia-accent" />
                  <div>
                    <p className="font-medium text-white">Telefon</p>
                    <a href="tel:+4967038061180" className="text-acencia-accent hover:text-acencia-accent-hover transition-colors duration-150">
                      +49 (0) 6703 80611-80
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Information */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                <Scale className="w-6 h-6 text-acencia-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Rechtliche Hinweise
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-200 leading-relaxed">
              <div>
                <h4 className="font-semibold text-white mb-3">Haftung für Inhalte</h4>
                <p className="text-sm">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch 
                  nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                  oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Haftung für Links</h4>
                <p className="text-sm">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Urheberrecht</h4>
                <p className="text-sm">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                  deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                  außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
                  Autors bzw. Erstellers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Datenschutz</h4>
                <p className="text-sm">
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                  Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder 
                  E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. 
                  Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-acencia-accent hover:text-acencia-accent-hover underline">Datenschutzerklärung</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Disclaimer */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-acencia-accent/30">
            <h3 className="text-xl font-semibold text-white mb-4">
              Berufsrechtliche Angaben
            </h3>
            <div className="text-gray-200 text-sm leading-relaxed space-y-2">
              <p><strong className="text-white">Berufsbezeichnung:</strong> Versicherungsmakler (verliehen in Deutschland)</p>
              <p><strong className="text-white">Erlaubnis nach:</strong> § 34d Abs. 1 Gewerbeordnung</p>
              <p><strong className="text-white">Aufsichtsbehörde:</strong> Industrie- und Handelskammer für Rheinhessen</p>
              <p><strong className="text-white">Registrierungsnummer:</strong> Wird bei Bedarf mitgeteilt</p>
            </div>
          </div>

        </div>
      </section>
      
      </main>
      <Footer />
    </div>
  );
};

export default ImprintPage;