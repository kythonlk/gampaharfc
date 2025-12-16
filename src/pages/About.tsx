import gampaha from '../images/2007.jpg';
import tuskers from '../images/tuskers.webp';
import glogo from '../images/logo-full.webp';
import tlogo from '../images/tuskers-logo.webp';
import l1 from '../images/l1.webp';
import l2 from '../images/l2.webp';
import l3 from '../images/l3.webp';
import kanishka from '../images/Kanishka_Dias.jpg';
import thilina from '../images/Thilina_Madhuranga.jpg';

import { Calendar, MapPin, Users, Globe, ArrowRight, Quote } from "lucide-react";

export default function TuskersHistory() {
  const leaders = [
    {
      captain: 'Dayan Diddeniya',
      image: l1,
    },
    {
      captain: 'Hashan Sooriarachchi',
      image: l2,
    },
    {
      captain: 'Dinusha Lakshitha',
      image: l3,
    }
  ];
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gray-800 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gray-900 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto relative z-10 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide uppercase text-gray-300">Est. 2007 — Present</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight">
            Two Clubs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">
              One Legacy.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From the fields of Gampaha to the arenas of Dubai. A story of friendship, resilience, and an unwavering love for the game of rugby.
          </p>
        </div>
        {/* here two clubs logo */}
        <div className="flex items-center justify-center text-center gap-4 max-w-5xl mx-auto mt-6">
          <img src={glogo} alt="Tuskers" className="h-40 w-auto" />
          <img src={tlogo} alt="Tuskers" className="h-56 w-auto" />
        </div>
      </section>

      <section className="relative py-10 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">

          {/* Vertical Line (Desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden md:block"></div>

          {/* --- CHAPTER 1: GAMPAHA RFC --- */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 mb-32 group">

            {/* Left Content (Text) */}
            <div className="w-full md:w-1/2 md:pr-16 md:text-right order-2 md:order-1 relative z-10">
              <div className="inline-flex items-center gap-2 text-gray-400 mb-4 md:flex-row-reverse">
                <Calendar className="w-4 h-4" />
                <span className="font-mono text-sm">2007</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-gray-200 transition-colors">
                The Origins: <br /> Gampaha RFC
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                Gampaha RFC was founded by <strong className="text-white">Dayan Diddeniya</strong> together with his school friend, the late <strong className="text-white">Kanishka Dias</strong>. What began as a shared passion for rugby between two lifelong friends soon evolved into a community-driven rugby club with a mission to uplift the sport in the Gampaha region.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Their vision was simple yet profound — to create a platform where young athletes could discover rugby, develop discipline, and grow into competitive players.
              </p>
            </div>

            {/* Center Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-black border border-gray-600 rounded-full items-center justify-center z-20 group-hover:border-white transition-colors duration-500">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            {/* Right Content (Image Placeholder) */}
            <div className="w-full md:w-1/2 md:pl-16 order-1 md:order-2">
              <div className="relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                {/* Replace src with actual Gampaha RFC image */}
                <img
                  src={gampaha}
                  alt="Gampaha RFC Early Days"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded border border-white/10">
                  <span className="text-xs font-mono text-gray-300">Sri Lanka, 2007</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- TRIBUTE SECTION (Inset) --- */}
          <div className="max-w-3xl mx-auto my-24 relative">
            <div className="absolute -left-4 -top-4 text-gray-800">
              <Quote size={80} />
            </div>
            <div className="bg-gray-900/50 border-l-2 border-white p-8 md:p-12 relative backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-gray-300 font-light italic leading-relaxed">
                “Although Kanishka Dias is no longer with us, his legacy remains deeply rooted in the club’s identity. There is another legacy as well—late Thilina Maduranga. The memories of both legends continue to inspire every player who proudly wears the Gampaha RFC colours.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-12 bg-gray-600"></div>
                <span className="text-sm font-semibold text-white uppercase tracking-widest">In Memoriam</span>
              </div>
            </div>

            <div className="flex items-center justify-center text-center gap-8 mx-auto mt-6 md:pl-8">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={thilina}
                  alt="Late Thilina Madhuranga"
                  className="h-40 md:h-80 w-auto p-1 border border-white/10 bg-white opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0"
                />
                <p className="text-sm text-white/70">
                  Late Thilina Madhuranga
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  src={kanishka}
                  alt="Late Kanishka Dias"
                  className="h-40 md:h-80 w-auto p-1 border border-white/10 bg-white opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0"
                />
                <p className="text-sm text-white/70">
                  Late Kanishka Dias
                </p>
              </div>
            </div>
          </div>

          {/* --- CHAPTER 2: DUBAI TUSKERS --- */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 mb-20 group">

            {/* Left Content (Image Placeholder) */}
            <div className="w-full md:w-1/2 md:pr-16 relative z-10">
              <div className="relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                {/* Replace src with actual Dubai Tuskers image */}
                <img
                  src={tuskers}
                  alt="Dubai Tuskers Team"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-3 py-1 rounded border border-white/10">
                  <span className="text-xs font-mono text-gray-300">United Arab Emirates, 2023</span>
                </div>
              </div>
            </div>

            {/* Center Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-black border border-gray-600 rounded-full items-center justify-center z-20 group-hover:border-white transition-colors duration-500">
              <Globe className="w-5 h-5 text-gray-300" />
            </div>

            {/* Right Content (Text) */}
            <div className="w-full md:w-1/2 md:pl-16 relative z-10">
              <div className="inline-flex items-center gap-2 text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span className="font-mono text-sm">2023</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-gray-200 transition-colors">
                Going Global: <br /> Dubai Tuskers RFC
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                Inspired by the success and spirit of Gampaha RFC, Dayan Diddeniya expanded his rugby vision beyond Sri Lanka. In 2023, he founded <strong className="text-white">Dubai Tuskers RFC</strong>, bringing the same passion, community values, and commitment to excellence to the UAE.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Dubai Tuskers RFC rapidly grew into a multicultural rugby family, uniting players from diverse backgrounds under one badge.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- CONNECTED IDENTITY --- */}
      <section className="py-24 bg-neutral-900 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center items-center gap-4 text-gray-500">
            <span className="uppercase tracking-widest text-sm">Sri Lanka</span>
            <ArrowRight className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm">UAE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Sister Clubs
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Today, Gampaha RFC and Dubai Tuskers RFC stand connected by history, passion, and the founder’s lifelong dedication to developing rugby across borders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Community"
              desc="Building brotherhood beyond the pitch."
            />
            <FeatureCard
              icon={<MapPin className="w-6 h-6" />}
              title="Expansion"
              desc="Taking local talent to international stages."
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="Diversity"
              desc="Uniting cultures through the sport of rugby."
            />
          </div>
        </div>
      </section>

      <div className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="text-center mb-12 text-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Shared Colours
          </h2>
          <p className="text-xl" >Players who proudly wore both the Gampaha RFC and Dubai Tuskers jerseys — connecting Sri Lankan roots with Dubai rugby passion.</p>
          <div className="h-1 w-32 mx-auto mt-6 bg-black" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-8 mx-auto max-w-6xl">
          {leaders.map((leader, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border-2"
            >
              <img
                src={leader.image}
                alt={leader.captain}
                className="w-full h-[24em] md:h-auto md:max-h-[24em] object-cover"
              />
              <div className="p-6 space-y-2">
                <h3 className="font-bold text-2xl text-black">{leader.captain}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-6 bg-black border border-white/10 hover:border-white/30 transition-all duration-300 rounded-lg text-center group">
    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-all">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{desc}</p>
  </div>
);

