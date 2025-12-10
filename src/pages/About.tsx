import t2023 from '../images/2023.webp';
import t2024 from '../images/2024.webp';
import t2025 from '../images/jama-2025.webp';


export default function TuskersHistory() {
  const leaders = [
    {
      year: '2023',
      captain: 'Dayan Diddeniya',
      viceCaptain: 'Arshad Jamaldeen',
      image: t2023,
      captainRole: 'Dubai 7s Captain 2023'
    },
    {
      year: '2024',
      captain: 'Dayan Diddeniya',
      viceCaptain: 'Arshad Jamaldeen',
      image: t2024,
      captainRole: 'Dubai 7s Captain 2024'
    },
    {
      year: '2025',
      captain: 'Arshad Jamaldeen',
      viceCaptain: 'Dulara Danusha',
      image: t2025,
      captainRole: 'Dubai 7s Captain 2025'
    }
  ];

  return (
    <div className="w-full overflow-hidden">

      {/* HERO SECTION */}
      <div
        className="relative py-20 px-6 md:px-16 lg:px-24 bg-gray-950"
      >
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-7xl font-extrabold" style={{ color: 'white' }}>
            ABOUT US
          </h1>
          <p className="text-xl md:text-2xl font-bold tracking-widest text-gray-400">
            ONE TEAM - ONE DREAM - ONE FAMILY
          </p>
          <div className="h-1 w-32 mx-auto" style={{ backgroundColor: 'white' }} />
        </div>
      </div>

      {/* INTRODUCTION & PARTNERSHIP */}
      <div className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            <span className="font-bold text-gray-900">Gampaha Rugby Football Club (Gampaha RFC)</span> is a dynamic and rapidly developing rugby union club based in Gampaha, Sri Lanka. Founded in <span className="font-bold text-gray-900">2007</span> by <span className="font-bold text-gray-900">Dayan Diddeniya</span>, the club was established with the vision of promoting rugby among youth and adult players in the region. Since then, the club has been committed to offering high-quality training, structured competitions, and an inclusive rugby culture.
          </p>
          <p>
            As an affiliated partner club of <span className="font-bold text-gray-900">Dubai Tuskers RFC</span>, we benefit from international exposure, shared coaching expertise, and professional development opportunities. This partnership creates pathways for our players to gain overseas experience and access higher-level competition.
          </p>
        </div>
      </div>

      {/* MISSION & VISION */}
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

      {/* LEADERS SECTION */}
      <div className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'black' }}>
            Leadership Legends
          </h2>
          <p className="text-xl" style={{ color: '#374151' }}>Emirates Dubai Rugby 7s</p>
          <div className="h-1 w-32 mx-auto mt-6" style={{ backgroundColor: 'black' }} />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-8 mx-10">
          {leaders.map((leader, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border-2"
              style={{ backgroundColor: '#111827', borderColor: '#374151' }}
            >
              <img
                src={leader.image}
                alt={leader.captain}
                className="w-full h-[24em] md:h-[40em] object-cover"
              />
              <div className="p-6 space-y-2">
                <div
                  className="px-3 py-1 rounded-full font-bold text-sm inline-block"
                  style={{ backgroundColor: 'white', color: 'black' }}
                >
                  {leader.year}
                </div>
                <h3 className="font-bold text-2xl" style={{ color: 'white' }}>{leader.captain}</h3>
                <p className="text-white text-lg">{leader.captainRole}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl overflow-hidden border-2" style={{ borderColor: '#374151' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ backgroundColor: 'black' }}>
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-lg" style={{ color: 'white' }}>YEAR</th>
                  <th className="px-6 py-4 text-left font-bold text-lg" style={{ color: 'white' }}>CAPTAIN</th>
                  <th className="px-6 py-4 text-left font-bold text-lg" style={{ color: 'white' }}>VICE CAPTAIN</th>
                </tr>
              </thead>

              <tbody style={{ backgroundColor: '#111827' }}>
                {leaders.map((leader, idx) => (
                  <tr key={idx} className="border-b" style={{ borderColor: '#374151' }}>
                    <td className="px-6 py-4 font-bold text-xl" style={{ color: 'white' }}>{leader.year}</td>
                    <td className="px-6 py-4 text-white text-lg">{leader.captain}</td>
                    <td className="px-6 py-4 text-white text-lg">{leader.viceCaptain}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
