import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Users, Award, HeartHandshake, Target, ArrowRight, Mail, Calendar } from "lucide-react";

const ServiceTeamPage = () => {
  const teamValues = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise",
      description: "Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge und tiefes Verständnis für die Bedürfnisse unserer Kunden."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Persönliche Betreuung",
      description: "Jeder Kunde bekommt seinen festen Ansprechpartner – für kontinuierliche und vertrauensvolle Zusammenarbeit."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Zielorientiert",
      description: "Wir arbeiten ergebnisorientiert und fokussieren uns auf messbare Erfolge für unsere Kunden."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teamwork",
      description: "Interdisziplinäres Team aus Versicherungsexperten, IT-Spezialisten und Kundenbetreuern."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
              Unser <span className="text-orange-600">Service-Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Experten für Ihre betriebliche Altersvorsorge
            </p>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Mit über 30 Jahren Erfahrung und einem engagierten Team von Spezialisten stehen wir Ihnen 
              bei allen Fragen zur bAV zur Seite. Lernen Sie die Menschen hinter ACENCIA kennen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Unser Ansatz
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bei ACENCIA steht der Mensch im Mittelpunkt. Wir glauben daran, dass erfolgreiche bAV-Projekte 
                  nur durch persönliche Betreuung und echte Partnerschaft entstehen. Unser interdisziplinäres 
                  Team verbindet jahrzehntelange Branchenerfahrung mit modernster Technologie.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Jeder Kunde bekommt einen festen Ansprechpartner, der das Unternehmen und seine Bedürfnisse 
                  kennt. So entstehen langfristige Partnerschaften, die auf Vertrauen und gegenseitigem 
                  Verständnis basieren.
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Was uns auszeichnet</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Persönliche Ansprechpartner</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Interdisziplinäre Expertise</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kontinuierliche Weiterbildung</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kundenorientierte Lösungen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Unsere Werte
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diese Prinzipien leiten unser tägliches Handeln und prägen die Zusammenarbeit in unserem Team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="text-orange-600">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leadership */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Geschäftsführung
              </h2>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                <div className="mb-6 md:mb-0">
                  <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Uwe Weimert</h3>
                  <p className="text-orange-600 font-medium mb-4">Geschäftsführer</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mit über 30 Jahren Erfahrung in der Versicherungsbranche leitet Uwe Weimert ACENCIA 
                    mit Leidenschaft und Expertise. Seine Vision: betriebliche Altersvorsorge durch 
                    Digitalisierung zu vereinfachen und für alle zugänglich zu machen.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="mailto:info@acencia.de" 
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-150"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">Kontakt aufnehmen</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expansion Notice */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
              Unser Team wächst
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              ACENCIA befindet sich in einer Wachstumsphase. Weitere Teammitglieder und deren Vorstellung 
              folgen in Kürze. Auch Informationen zu Karrieremöglichkeiten werden hier ergänzt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-orange-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-orange-200 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Vereinbaren Sie ein unverbindliches Gespräch mit unserem Team. Wir freuen uns darauf, 
              Sie kennenzulernen und gemeinsam Lösungen für Ihre bAV zu entwickeln.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Beratungstermin vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-150"
                onClick={() => window.location.href = '/kontakt'}
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceTeamPage;