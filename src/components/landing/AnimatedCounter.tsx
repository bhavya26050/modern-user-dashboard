import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  label: string;
  suffix?: string;
}

export default function AnimatedCounter({
  target,
  label,
  suffix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-foreground">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-muted-foreground mt-2">{label}</p>
    </div>
  );
}
