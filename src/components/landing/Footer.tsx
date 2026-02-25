import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Frame & Code</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Modern digital product studio building high-performance web applications.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-foreground transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Product Design</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center text-sm text-foreground/50">
          <p>&copy; 2025 Frame & Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
