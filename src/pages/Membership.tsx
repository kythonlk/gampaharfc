import { CheckCircle2, Users, Trophy, Heart, Calendar, ArrowRight } from 'lucide-react';
import a from '../images/15s.webp';
import b from '../images/touch.webp';
import c from '../images/women.webp';
import { Link } from 'react-router-dom';

export default function Membership() {
  const memberships = [
    {
      label: "Men’s Rugby",
      age: "18 YEARS AND UP",
      price: "AED 1,500",
      image: a,
      type: "men",
      perks: [
        "One-year club membership",
        "Weekly training and fitness sessions led by experienced coaches",
        "Free entry to the Dubai 7s tournament",
        "20% discount on all Gampaha RFC merchandise",
        "15% discount on Gampaha RFC events",
        "Free family entry to all Gampaha RFC social gatherings",
        "All playing kit, organized coaching, insurance included",
      ],
      whatWePlay: "UAE Division & Emirates Dubai 7s",
    },
    {
      label: "Womens’s Rugby",
      age: "18 YEARS AND UP",
      price: "AED 1,250",
      image: c,
      type: "women",
      perks: [
        "One-year club membership",
        "Weekly training and fitness sessions led by experienced coaches",
        "Free entry to the Dubai 7s tournament",
        "20% discount on all Gampaha RFC merchandise",
        "15% discount on Gampaha RFC events",
        "Free family entry to all Gampaha RFC social gatherings",
        "All playing kit, organized coaching, insurance included",
      ],
      whatWePlay: "UAE Divisions & Emirates Dubai 7s",
    },
    {
      label: "Social Touch Rugby",
      age: "16 YEARS AND UP",
      price: "AED 500",
      image: b,
      type: "touch",
      perks: [
        "One-year club membership",
        "Weekly training & fun social sessions",
        "15% discount on Gampaha RFC events",
        "Free family entry to all Gampaha RFC social gatherings",
        "20% discount on all Gampaha RFC merchandise",
        "Free entry to the Dubai 7s tournament",
        "Official Gampaha RFC singlet",
      ],
      whatWePlay: "UAE Touch Rugby Tournaments",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Membership
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Join the Gampaha RFC family and be part of something special
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="px-4 md:mx-20 lg:mx-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 ms:mx-20">
            {memberships.map((m, index) => (
              <Link
                key={index}
                to={`/membership-reg?type=${m.type}`}
                className="border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2"
              >
                <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.label}
                    className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white text-black text-xs sm:text-sm px-3 py-1 font-semibold shadow-md">
                    {m.age}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {m.label}
                  </h3>

                  <p className="text-gray-900 text-3xl sm:text-4xl font-extrabold mb-1">
                    {m.price}
                  </p>

                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                    Membership Benefits
                  </h4>

                  <ul className="space-y-2 mb-6">
                    {m.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1 font-semibold">
                      What we play
                    </p>
                    <p className="text-gray-900 font-bold text-sm sm:text-base">
                      {m.whatWePlay}
                    </p>
                  </div>

                  <button className="mt-6 sm:mt-8 w-full bg-gray-900 hover:bg-black text-white py-3 font-semibold flex items-center justify-center gap-2 transition-all">
                    Sign Up <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Join Gampaha RFC?
              </h2>
              <div className="w-24 h-1 bg-white mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                <Users className="h-10 w-10 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Inclusive Community
                </h3>
                <p className="text-gray-700">
                  Join a diverse, welcoming community united by passion for rugby.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                <Trophy className="h-10 w-10 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Competitive Play
                </h3>
                <p className="text-gray-700">
                  Compete in tournaments and leagues across the UAE.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                <Heart className="h-10 w-10 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Expert Coaching
                </h3>
                <p className="text-gray-700">
                  Learn from experienced coaches and former international players.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                <Calendar className="h-10 w-10 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Year-Round Activity
                </h3>
                <p className="text-gray-700">
                  Regular training, matches, and social events throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
