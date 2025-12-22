import { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { supabase, type Fixture } from '../lib/supabase';
import { Link } from 'react-router-dom';
import lg from '../images/logo.webp';

export default function Fixtures() {
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');

  useEffect(() => {
    const fetchFixtures = async () => {
      setLoading(true);
      let query = supabase.from('gp_fixtures').select('*').order('match_date', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data } = await query;
      console.log(data);

      if (data) {
        setFixtures(data);
      }
      setLoading(false);
    };

    fetchFixtures();
  }, [filter]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Fixtures & Results
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Stay updated with our match schedule and latest results
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">

          <div className="mb-8 flex justify-center">
            <div className="bg-gray-900 p-1 inline-flex gap-2 border border-white/20">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 font-semibold transition-all ${filter === 'all'
                  ? 'bg-white text-gray-900'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                All Matches
              </button>
              <button
                onClick={() => setFilter('upcoming')}
                className={`px-6 py-2 font-semibold transition-all ${filter === 'upcoming'
                  ? 'bg-white text-gray-900'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-6 py-2 font-semibold transition-all ${filter === 'completed'
                  ? 'bg-white text-gray-900'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                Results
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin w-12 h-12 border-t-2 border-b-2 border-gray-900"></div>
              <p className="mt-4 text-gray-300">Loading fixtures...</p>
            </div>
          ) : fixtures.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-10">
              {fixtures.map((fixture) => (
                <div
                  key={fixture.id}
                  className="p-4 md:p-10 border border-gray-200 bg-white hover:shadow-2xl transition-all duration-300 shadow-lg rounded-xl"
                >
                  <div className="flex flex-row md:grid md:grid-cols-3 gap-8 items-center justify-center mb-8">
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={lg}
                        alt={fixture.home_team}
                        className="w-24 h-24 object-contain"
                      />
                      <span className="text-base md:text-xl text-gray-900 font-semibold tracking-wide uppercase">
                        {fixture.home_team}
                      </span>
                    </div>

                    <span className="hidden md:inline-block text-4xl font-extrabold text-gray-900 text-center">
                      {fixture.status === 'completed' &&
                        fixture.home_score !== null &&
                        fixture.away_score !== null
                        ? `${fixture.home_score} - ${fixture.away_score}`
                        : 'VS'}
                      <span className="md:hidden text-4xl font-extrabold text-gray-900">
                        VS
                      </span>
                    </span>


                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={fixture.away_team_logo}
                        alt={fixture.away_team}
                        className="w-24 h-24 object-contain"
                      />
                      <span className="text-base md:text-xl text-gray-900 font-semibold tracking-wide uppercase">
                        {fixture.away_team}
                      </span>
                    </div>
                  </div>

                  {fixture.status === 'completed' &&
                    <span className="md:hidden text-4xl font-extrabold text-gray-900 flex items-center justify-center py-4">
                      {fixture.home_score} - {fixture.away_score}
                    </span>
                  }
                  <div className="text-center text-gray-600 text-sm space-y-2 mb-8">
                    <div className="flex justify-center gap-2 text-gray-900">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(fixture.match_date)} at {formatTime(fixture.match_date)}
                      </span>
                    </div>

                    <div className="flex justify-center gap-2 text-gray-900">
                      <MapPin className="w-4 h-4" />
                      <span>{fixture.venue}</span>
                    </div>

                    <div className="font-semibold uppercase tracking-wide">
                      {fixture.competition}
                    </div>
                  </div>
                  <Link to={`/match/${fixture.id}`}>
                    <button className="w-full py-3 border border-gray-900 text-gray-900 font-semibold tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-lg">
                      Match Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No fixtures found for this category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
