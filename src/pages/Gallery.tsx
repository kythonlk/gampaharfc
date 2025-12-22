import { useEffect, useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { supabase, type GalleryItem } from '../lib/supabase';

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      let query = supabase
        .from('gp_gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      const { data } = await query;

      if (data) {
        setGallery(data);
      }
      setLoading(false);
    };

    fetchGallery();
  }, [selectedCategory]);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'matches', label: 'Matches' },
    { value: 'training', label: 'Training' },
    { value: 'tournaments', label: 'Tournaments' },
    { value: 'social', label: 'Social Events' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Capturing the moments that define our journey
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-center">
            <div className="bg-white rounded-lg shadow-md p-1 inline-flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2 rounded-md font-semibold transition-all ${selectedCategory === category.value
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
              <p className="mt-4 text-gray-600">Loading gallery...</p>
            </div>
          ) : gallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gallery.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        {item.caption && (
                          <p className="text-sm text-gray-200">{item.caption}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                No photos found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Share Your Photos
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Have great photos from our matches or events? We'd love to feature
              them in our gallery! Send them to us via WhatsApp or email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971521329719"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#20BA5A] transition-colors shadow-lg"
              >
                Send via WhatsApp
              </a>
              <a
                href="mailto:info@gampaharfc.com"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-colors shadow-lg"
              >
                Send via Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}