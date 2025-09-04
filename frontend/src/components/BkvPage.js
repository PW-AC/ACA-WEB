import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Shield, Users, TrendingUp, ArrowRight, Building2, Heart, CheckCircle, Play } from "lucide-react";

const BkvPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const moreInfoBoxes = [
    {
      title: "Für Unternehmen",
      description: "Entdecken Sie die Vorteile der betrieblichen Krankenversicherung als Mitarbeiterbenefit und Wettbewerbsvorteil.",
      icon: <Building2 className="w-6 h-6" />,
      link: "/bkv/x"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Same structure as bAV page */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - 7/12 */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
                Wir machen <span className="text-orange-600">bKV einfach!</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gesundheitsvorsorge als Mitarbeiterbenefit - Attraktive Zusatzleistungen für Ihre Belegschaft
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">Steuerfreie Zusatzleistungen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">Erhöhte Mitarbeiterzufriedenheit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">Wettbewerbsvorteil bei der Talentgewinnung</span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mb-8">
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <span>Jetzt informieren</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="lg:col-span-5">
              {/* Info Placeholder */}
              <div className="bg-gray-100 rounded-lg p-8 mb-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-gray-900 font-medium text-base mb-2">Betriebliche Krankenversicherung</h3>
                <p className="text-gray-600 text-sm">Gesundheitsvorsorge für Ihre Mitarbeiter</p>
              </div>

              {/* Onboarding Card */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-green-800 font-medium text-sm">Kostenlose Beratung</span>
                </div>
                <p className="text-green-700 text-sm">Unverbindliche Erstberatung</p>
                <Button className="w-full mt-4 bg-white border border-green-300 text-green-800 hover:bg-green-50 text-sm py-2">
                  KOSTENFREI
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Was ist betriebliche Krankenversicherung?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Die betriebliche Krankenversicherung (bKV) ist eine Zusatzversicherung, die Arbeitgeber für ihre Mitarbeiter abschließen können. 
                  Sie ergänzt die gesetzliche Krankenversicherung um attraktive Mehrleistungen.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Als steuerfreier Sachbezug bis 50 Euro monatlich bietet die bKV sowohl für Arbeitgeber als auch Arbeitnehmer 
                  erhebliche Vorteile bei der Mitarbeiterbindung und Gesundheitsvorsorge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Inhalte folgen in Kürze
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Diese Seite wird mit umfassenden Informationen zur betrieblichen Krankenversicherung gefüllt.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Für Arbeitgeber</h3>
                <p className="text-gray-600 text-sm">Vorteile und Möglichkeiten der bKV</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Für Arbeitnehmer</h3>
                <p className="text-gray-600 text-sm">Leistungen und Benefits</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Beratung</h3>
                <p className="text-gray-600 text-sm">Individuelle Lösungen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Info Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Mehr erfahren
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreInfoBoxes.map((box, index) => (
              <Link 
                key={index}
                to={box.link}
                className="group block"
              >
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150 h-full">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-all duration-150">
                    <div className="text-orange-600 group-hover:text-orange-700 transition-colors duration-150">
                      {box.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-150">
                    {box.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {box.description}
                  </p>
                  
                  <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors duration-150">
                    <span className="text-sm font-medium">Mehr erfahren</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Placeholder cards for future content */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 opacity-50">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Für Arbeitnehmer</h3>
              <p className="text-gray-500 text-sm">Folgt in Kürze</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 opacity-50">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Aktuelles</h3>
              <p className="text-gray-500 text-sm">Folgt in Kürze</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BkvPage;