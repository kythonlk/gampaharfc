import dabare from '../images/dabare.webp';
import jb from '../images/jb.webp';
import arshad from '../images/jama-2025.webp';
import dayan from '../images/dayan-2025.webp';
// import { Calendar, MapPin } from 'lucide-react';
import logoFull from '../images/logo-full.webp';
// import lg from '../images/logo-bg.webp';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// const formatDate = (dateString: string) => {
//   return new Date(dateString).toLocaleDateString('en-GB', {
//     weekday: 'long',
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//   });
// };
//
// const formatTime = (dateString: string) => {
//   return new Date(dateString).toLocaleTimeString('en-GB', {
//     hour: '2-digit',
//     minute: '2-digit',
//   });
// };

export default function About({ upcomingFixtures }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (upcomingFixtures.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === upcomingFixtures.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [upcomingFixtures.length]);

  const leadership = [
    {
      name: 'Dayan Diddeniya',
      role: 'Founder & Director of Rugby',
      bio: 'Former Sri Lanka Rugby player and coach',
      image: dayan
    },
    {
      name: 'Madhusanka Karunanayake',
      role: 'Chief Executive Officer',
      bio: 'Leading the strategic vision of the club',
      image: dabare
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200 blur-3xl opacity-20 rounded-full"></div>
                <img
                  src={logoFull}
                  alt="Gampaha RFC Logo"
                  className="relative w-full max-w-md h-auto"
                />
              </div>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                About Us
              </h1>
              <div className="w-24 h-1.5 bg-gray-900 mb-6 rounded-full"></div>
              <p className="text-2xl text-gray-700 font-semibold mb-8">
                One Team. One Dream. One Family.
              </p>

              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-gray-900">Gampaha Rugby Football Club (Gampaha RFC)</span> is a dynamic and rapidly developing rugby union club based in Gampaha, Sri Lanka. Founded in <span className="font-bold text-gray-900">2007</span> by <span className="font-bold text-gray-900">Dayan Diddeniya</span>, the club was established with the vision of promoting rugby among youth and adult players in the region. Since then, the club has been committed to offering high-quality training, structured competitions, and an inclusive rugby culture.
                </p>
                <p>
                  As an affiliated partner club of <span className="font-bold text-gray-900">Dubai Tuskers RFC</span>, we benefit from international exposure, shared coaching expertise, and professional development opportunities. This partnership creates pathways for our players to gain overseas experience and access higher-level competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 px-6 md:px-16 lg:px-24 bg-gray-900 text-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-4 border-white pl-4">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to build a strong rugby foundation in Gampaha by focusing on character development, teamwork, physical fitness, and sportsmanship. We welcome players of all skill levels—beginners, school leavers, experienced players, and enthusiasts who want to stay connected to the sport.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-4 border-white pl-4">
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To establish Gampaha RFC as one of Sri Lanka’s leading rugby institutions and create a platform for talented athletes to excel both locally and internationally.
            </p>
          </div>
        </div>
      </div>

      {/* WHAT WE DO & VALUES */}
      <div className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* What We Do */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-gray-900 pl-4">
              What We Do
            </h2>
            <ul className="space-y-4">
              {[
                "Weekly training sessions for youth and senior teams",
                "Player fitness & conditioning programs",
                "Participation in local and regional tournaments",
                "School rugby development and talent identification",
                "Community-driven rugby events"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">🏉</span>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-gray-900 pl-4">
              Our Values
            </h2>
            <ul className="space-y-4">
              {[
                "Discipline",
                "Commitment",
                "Respect",
                "Teamwork",
                "Growth"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-900"></span>
                  <span className="text-gray-900 font-bold text-xl">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 bg-gray-100 rounded-xl border-l-4 border-gray-900">
              <p className="text-gray-700 font-medium italic">
                "At Gampaha RFC, we believe in developing not just skilled athletes, but responsible and confident individuals who contribute positively to the community."
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <div className="w-24 h-1.5 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-7xl mx-auto">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto px-40 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white"> */}
      {/*   <div className="container mx-auto px-4"> */}
      {/*     <div className="text-center mb-16"> */}
      {/*       <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> */}
      {/*         Our Achievements */}
      {/*       </h2> */}
      {/*       <div className="w-24 h-1.5 bg-gray-900 mx-auto rounded-full"></div> */}
      {/*       <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto"> */}
      {/*         Celebrating our milestones and accomplishments that define our journey */}
      {/*       </p> */}
      {/*     </div> */}
      {/**/}
      {/*     <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"> */}
      {/*       <div className="group relative bg-gray-900 rounded-2xl shadow-xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"> */}
      {/*         <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div> */}
      {/*         <div className="relative z-10"> */}
      {/*           <div className="bg-white text-gray-900 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"> */}
      {/*             <Trophy className="h-8 w-8" /> */}
      {/*           </div> */}
      {/*           <h3 className="text-2xl font-bold text-white mb-4"> */}
      {/*             Emirates Dubai Rugby 7s Champions 2024 */}
      {/*           </h3> */}
      {/*           <p className="text-gray-300 leading-relaxed"> */}
      {/*             Won the Gulf Men's Social Plate at the prestigious Emirates Dubai Rugby 7s tournament, showcasing our team's exceptional skill and determination */}
      {/*           </p> */}
      {/*         </div> */}
      {/*       </div> */}
      {/**/}
      {/*       <div className="group relative bg-gray-900 rounded-2xl shadow-xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"> */}
      {/*         <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div> */}
      {/*         <div className="relative z-10"> */}
      {/*           <div className="bg-white text-gray-900 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"> */}
      {/*             <Trophy className="h-8 w-8" /> */}
      {/*           </div> */}
      {/*           <h3 className="text-2xl font-bold text-white mb-4"> */}
      {/*             Emirates Dubai Rugby 7s Runner-Up 2025 */}
      {/*           </h3> */}
      {/*           <p className="text-gray-300 leading-relaxed"> */}
      {/*             Became the Gulf Men’s Open Plate finalist at the prestigious Emirates Dubai Rugby 7s tournament, showcasing our team’s exceptional skill and determination. */}
      {/*           </p> */}
      {/*         </div> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}
      {/* <section className="bg-gray-900 py-20 border-t border-white/10"> */}
      {/*   <div className="container mx-auto px-4"> */}
      {/*     <div className="text-center mb-16"> */}
      {/*       <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2"> */}
      {/*         Latest Match Results */}
      {/*       </h2> */}
      {/*       <div className="w-24 h-1 bg-white mx-auto"></div> */}
      {/*       <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto"> */}
      {/*         Breaking down our recent clashes across all divisions */}
      {/*       </p> */}
      {/*     </div> */}
      {/*   </div> */}
      {/**/}
      {/*   <div className="block md:hidden w-full overflow-hidden pb-10"> */}
      {/*     <div */}
      {/*       className="flex transition-transform duration-500 ease-in-out" */}
      {/*       style={{ transform: `translateX(-${currentIndex * 100}%)` }} */}
      {/*     > */}
      {/*       {upcomingFixtures.map((match: any, i: number) => ( */}
      {/*         <div key={`mob-${i}`} className="w-full flex-shrink-0 px-4"> */}
      {/*           <FixtureCard match={match} /> */}
      {/*         </div> */}
      {/*       ))} */}
      {/*     </div> */}
      {/**/}
      {/*     <div className="flex justify-center gap-2 mt-6"> */}
      {/*       {upcomingFixtures.map((_: any, idx: number) => ( */}
      {/*         <button */}
      {/*           key={idx} */}
      {/*           onClick={() => setCurrentIndex(idx)} */}
      {/*           className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/20" */}
      {/*             }`} */}
      {/*         /> */}
      {/*       ))} */}
      {/*     </div> */}
      {/*   </div> */}
      {/**/}
      {/*   <div className="hidden md:block overflow-hidden py-10 w-full relative"> */}
      {/*     <div className="flex w-max animate-fixture-scroll hover:pause"> */}
      {/*       <div className="flex gap-6 px-3"> */}
      {/*         {upcomingFixtures.map((match: any, i: number) => ( */}
      {/*           <FixtureCard key={`original-${i}`} match={match} /> */}
      {/*         ))} */}
      {/*       </div> */}
      {/*       <div className="flex gap-6 px-3"> */}
      {/*         {upcomingFixtures.map((match: any, i: number) => ( */}
      {/*           <FixtureCard key={`copy-${i}`} match={match} /> */}
      {/*         ))} */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}
    </div>
  );
}

// const FixtureCard = ({ match }: { match: any }) => {
//   return (
//     <Link
//       to={`/match/${match.id}`}
//       className="w-full sm:w-[400px] md:w-[600px] flex-shrink-0 bg-white/5 border border-white/30 p-8 shadow-xl hover:bg-white/10 transition-all block"
//     >
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex flex-col items-center gap-3 w-1/2">
//           <img src={match.home_team_logo || lg} className="w-20 h-20 object-contain" alt="Home" />
//           <span className="text-lg text-white font-semibold uppercase text-center truncate w-full">
//             {match.home_team}
//           </span>
//         </div>
//
//         <div className="flex flex-col items-center gap-3 w-1/2">
//           <img src={match.away_team_logo} className="w-20 h-20 object-contain" alt="Away" />
//           <span className="text-lg text-white font-semibold uppercase text-center truncate w-full">
//             {match.away_team}
//           </span>
//         </div>
//       </div>
//
//       <span className="text-4xl font-extrabold text-center block text-white mb-6">
//         {match.home_score} - {match.away_score}
//       </span>
//
//       <div className="text-center text-white text-sm space-y-2 mb-8">
//         <div className="flex justify-center gap-2 text-white items-center">
//           <Calendar className="w-4 h-4" />
//           <span> {formatDate(match.match_date)} at {formatTime(match.match_date)} </span>
//         </div>
//
//         <div className="flex justify-center gap-2 text-white items-center">
//           <MapPin className="w-4 h-4" />
//           <span className="truncate max-w-[250px]">{match.venue}</span>
//         </div>
//
//         <div className="font-semibold uppercase tracking-wide truncate">
//           {match.competition}
//         </div>
//       </div>
//
//       <button className="w-full py-3 border border-white text-white font-semibold uppercase hover:bg-white hover:text-gray-900 transition-all">
//         Match Details
//       </button>
//     </Link>
//   )
// }
