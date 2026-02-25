import { useState } from 'react';
import { Card } from '../ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

const testimonials = [
  {
    id: 1,
    quote: 'Frame & Code transformed our vision into reality. Their attention to detail and technical excellence is unmatched.',
    author: 'Sarah Chen',
    role: 'CEO, TechVenture Inc',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
    company: 'TechVenture Inc',
  },
  {
    id: 2,
    quote: 'Working with this team was seamless. They understood our goals and delivered beyond expectations.',
    author: 'Marcus Thompson',
    role: 'Founder, Digital Studios',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    rating: 5,
    company: 'Digital Studios',
  },
  {
    id: 3,
    quote: 'The level of professionalism and innovation they brought to our project was exceptional. Highly recommended!',
    author: 'Emma Rodriguez',
    role: 'Product Director, StartupXYZ',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    rating: 5,
    company: 'StartupXYZ',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      items.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/60">
            Join 50+ companies that trust us with their digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {getVisibleTestimonials().map((testimonial, idx) => (
            <Card 
              key={testimonial.id}
              className="p-8 border-border hover:border-foreground/30 bg-card transition-all duration-300 hover:shadow-lg cursor-pointer group"
              style={{
                animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-primary text-primary transition-transform duration-300 group-hover:scale-110" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                
                <p className="text-foreground/80 mb-8 leading-relaxed text-lg italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-all duration-300"
                  />
                  <div>
                    <div className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-foreground/10 hover:border-foreground/30 transition-all duration-300 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'bg-foreground w-8'
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-foreground/10 hover:border-foreground/30 transition-all duration-300 group"
          >
            <ChevronRight className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
