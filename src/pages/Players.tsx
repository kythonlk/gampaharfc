import { useEffect, useState } from 'react';
import { User } from 'lucide-react';
import { supabase, type Player } from '../lib/supabase';

export default function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState<string>('all');

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      let query = supabase.from('players').select('*').order('jersey_number');

      if (selectedTeam !== 'all') {
        query = query.eq('team', selectedTeam);
      }

      const { data } = await query;

      if (data) {
        setPlayers(data);
      }
      setLoading(false);
    };

    fetchPlayers();
  }, [selectedTeam]);

  const teams = [
    { value: 'all', label: 'All Players' },
    { value: 'senior', label: 'Gampaha RFC' },
    { value: 'development', label: 'Senior Mens Team' },
    { value: 'touch', label: 'Touch Rugby' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Players
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Meet the talented athletes who represent Gampaha RFC
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-center">
            <div className="bg-white rounded-lg shadow-md p-1 inline-flex gap-2">
              {teams.map((team) => (
                <button
                  key={team.value}
                  onClick={() => setSelectedTeam(team.value)}
                  className={`px-6 py-2 rounded-md font-semibold transition-all ${selectedTeam === team.value
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {team.label}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
              <p className="mt-4 text-gray-600">Loading players...</p>
            </div>
          ) : players.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="bg-gray-900 p-4 text-center relative">
                    {player.jersey_number && (
                      <div className="absolute top-2 right-2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                        {player.jersey_number}
                      </div>
                    )}
                    {player.photo_url ? (
                      <img
                        src={player.photo_url}
                        alt={player.name}
                        className="w-48 h-64 mx-auto mb-4 object-cover border-4 border-white"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-white flex items-center justify-center">
                        <User className="h-12 w-12 text-gray-900" />
                      </div>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {player.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-semibold mb-2">
                      {player.position}
                    </p>
                    {player.bio && (
                      <p className="text-xs text-gray-600 line-clamp-4">
                        {player.bio}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                No players found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Become a Member
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Interested in joining our squad? We're always looking for
              passionate rugby players to join the Gampaha RFC family.
            </p>
            <a
              href="https://wa.me/971521329719"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-black transition-colors shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}