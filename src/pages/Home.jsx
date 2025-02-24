import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const carouselImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070',
    title: 'Summer Collection',
    subtitle: 'Discover the latest trends in summer fashion',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070',
    title: 'Elegant Dresses',
    subtitle: 'Find your perfect dress for any occasion',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070',
    title: 'Accessories Collection',
    subtitle: 'Complete your look with our stunning accessories',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative h-[80vh] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselImages.map((image) => (
            <div
              key={image.id}
              className="min-w-full h-full relative"
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4">{image.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{image.subtitle}</p>
                  <Link
                    to="/shop"
                    className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Dresses',
              image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983',
              link: '/category/dresses',
            },
            {
              title: 'Accessories',
              image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=2070',
              link: '/category/accessories',
            },
            {
              title: 'Footwear',
              image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080',
              link: '/category/footwear',
            },
          ].map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative h-96 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
