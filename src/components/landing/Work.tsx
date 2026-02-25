import React from 'react';
import { Card } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SaaS Analytics Platform',
    description: 'Real-time dashboard with 500ms refresh rate',
    thumbnail: '/placeholder.svg?height=300&width=500',
  },
  {
    id: 2,
    title: 'E-Commerce Marketplace',
    description: 'Full-stack solution serving 100k+ daily users',
    thumbnail: '/placeholder.svg?height=300&width=500',
  },
  {
    id: 3,
    title: 'Mobile App Backend',
    description: 'Scalable API handling millions of requests daily',
    thumbnail: '/placeholder.svg?height=300&width=500',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-foreground/60 text-lg">
            Case studies from projects we're proud of
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="overflow-hidden border-border/30 hover:shadow-lg transition-all hover:translate-y-[-4px] bg-background cursor-pointer"
            >
              <div className="h-48 bg-secondary/50 overflow-hidden">
                <img 
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-primary hover:gap-2 transition-all text-sm font-medium">
                  View Project <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
