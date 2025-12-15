import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Get in touch with Gampaha RFC
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:info@gampaharfc.com"
                        className="text-gray-700 hover:text-black transition-colors"
                      >
                        info@gampaharfc.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        For general inquiries and information
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+94777334708"
                        className="text-gray-700 hover:text-black transition-colors"
                      >
                        +94 77 733 4708
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Available during business hours
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/+94777334708"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#25D366] transition-colors"
                      >
                        +94 77 733 4708
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Quick response via WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Location
                      </h3>
                      <p className="text-gray-700">Gampaha, Sri Lanka</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Training and match venue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Leadership Team
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Dayan Diddeniya
                  </h3>
                  <p className="text-gray-600 font-semibold mb-2">
                    Founder & Director of Rugby
                  </p>
                  <p className="text-sm text-gray-600">
                    Former Sri Lanka Rugby player and coach
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Madhusanka Karunanayake
                  </h3>
                  <p className="text-gray-600 font-semibold mb-2">
                    Chief Executive Officer
                  </p>
                  <p className="text-sm text-gray-600">
                    Strategic leadership and operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Follow Us on Social Media
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.facebook.com/GampahaRFC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-4 rounded-xl hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 min-w-[200px]"
              >
                <Facebook className="h-6 w-6" />
                <span className="font-semibold">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/gampaharfc/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 min-w-[200px]"
              >
                <Instagram className="h-6 w-6" />
                <span className="font-semibold">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/gampaharfc/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-4 rounded-xl hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 min-w-[200px]"
              >
                <Linkedin className="h-6 w-6" />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@dubaituskers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-4 rounded-xl hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 min-w-[200px]"
              >
                <Youtube className="h-6 w-6" />
                <span className="font-semibold">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
