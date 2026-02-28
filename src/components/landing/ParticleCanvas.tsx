import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface DustParticle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
  turbulence: number;
  drift: number;
}

// Pink color palette matching the dust explosion image
const PINK_COLORS = [
  '236, 72, 153',   // pink-500
  '244, 114, 182',  // pink-400
  '219, 39, 119',   // pink-600
  '190, 24, 93',    // pink-700
  '251, 146, 200',  // lighter pink
  '255, 182, 218',  // soft pink
  '200, 50, 120',   // deep pink
  '168, 29, 99',    // magenta-ish
];

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<DustParticle[]>([]);
  const animationRef = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDust(canvas.width, canvas.height);
    };

    // Create the dust explosion particles — dense on the right, scattering left
    const initDust = (w: number, h: number) => {
      const isDark = theme === 'dark';
      const count = isDark ? 350 : 200;
      const particles: DustParticle[] = [];

      for (let i = 0; i < count; i++) {
        // Cluster particles toward the right side like the explosion image
        const clusterX = w * (0.55 + Math.random() * 0.45);
        const clusterY = h * (0.2 + Math.random() * 0.6);
        // Scatter factor — some fly far left, most stay right
        const scatter = Math.pow(Math.random(), 1.5);
        const x = clusterX - scatter * w * 0.6;
        const y = clusterY + (Math.random() - 0.5) * h * 0.5 * scatter;

        const color = PINK_COLORS[Math.floor(Math.random() * PINK_COLORS.length)];
        // Larger particles near cluster center, smaller as they scatter
        const distFromCenter = Math.sqrt(
          Math.pow((x - w * 0.75) / w, 2) + Math.pow((y - h * 0.45) / h, 2)
        );
        const sizeBase = isDark ? 3.5 : 2.5;
        const size = Math.max(0.5, sizeBase * (1 - distFromCenter * 1.5) + Math.random() * 2);
        const opacityBase = isDark ? 0.85 : 0.6;
        const opacity = Math.max(0.05, opacityBase * (1 - distFromCenter * 1.2) + Math.random() * 0.2);

        const maxLife = 200 + Math.random() * 400;
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.6) * 0.3, // slight leftward drift
          vy: (Math.random() - 0.5) * 0.2,
          size,
          opacity,
          color,
          life: Math.random() * maxLife, // stagger start
          maxLife,
          turbulence: 0.3 + Math.random() * 0.7,
          drift: (Math.random() - 0.5) * 0.1,
        });
      }
      particlesRef.current = particles;
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener('mousemove', handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a subtle pink radial glow on the right (like the dense explosion center)
      if (theme === 'dark') {
        const grd = ctx.createRadialGradient(
          canvas.width * 0.78, canvas.height * 0.45, 0,
          canvas.width * 0.78, canvas.height * 0.45, canvas.width * 0.35
        );
        grd.addColorStop(0, 'rgba(236, 72, 153, 0.08)');
        grd.addColorStop(0.3, 'rgba(219, 39, 119, 0.04)');
        grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (const p of particles) {
        p.life += 1;
        if (p.life > p.maxLife) {
          // Reset particle near origin cluster
          p.life = 0;
          p.x = p.originX + (Math.random() - 0.5) * 40;
          p.y = p.originY + (Math.random() - 0.5) * 40;
          p.vx = (Math.random() - 0.6) * 0.3;
          p.vy = (Math.random() - 0.5) * 0.2;
        }

        // Lifecycle opacity: fade in, hold, fade out
        const lifeRatio = p.life / p.maxLife;
        let fadeMultiplier = 1;
        if (lifeRatio < 0.1) fadeMultiplier = lifeRatio / 0.1;
        else if (lifeRatio > 0.7) fadeMultiplier = (1 - lifeRatio) / 0.3;

        // Mouse interaction: particles disperse from cursor
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180;
          p.vx += (dx / dist) * force * 0.6;
          p.vy += (dy / dist) * force * 0.6;
        }

        // Organic turbulence
        const time = Date.now() * 0.001;
        p.vx += Math.sin(time + p.originY * 0.01) * p.turbulence * 0.02;
        p.vy += Math.cos(time + p.originX * 0.01) * p.turbulence * 0.02;
        p.vx += p.drift;

        // Damping
        p.vx *= 0.97;
        p.vy *= 0.97;

        // Gentle pull back to origin (keeps the explosion shape)
        p.vx += (p.originX - p.x) * 0.001;
        p.vy += (p.originY - p.y) * 0.001;

        p.x += p.vx;
        p.y += p.vy;

        // Draw with glow
        const drawOpacity = p.opacity * fadeMultiplier;
        if (drawOpacity <= 0) continue;

        // Soft glow layer
        if (p.size > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${drawOpacity * 0.06})`;
          ctx.fill();
        }

        // Core particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${drawOpacity})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: theme === 'dark' ? 0.6 : 0.35 }}
    />
  );
}
