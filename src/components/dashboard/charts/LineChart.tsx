import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface LineChartProps {
  data?: Array<{ x: string; y: number }>;
  title?: string;
  height?: number;
}

const LineChart = ({
  data = [
    { x: "Jan", y: 10 },
    { x: "Feb", y: 20 },
    { x: "Mar", y: 15 },
    { x: "Apr", y: 25 },
    { x: "May", y: 30 },
  ],
  title = "Monthly Metrics",
  height = 280,
}: LineChartProps) => {
  // Calculate chart dimensions
  const width = 580;
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Calculate scales
  const maxY = Math.max(...data.map((d) => d.y));
  const points = data.map((d, i) => ({
    x: (i * chartWidth) / (data.length - 1) + padding,
    y: chartHeight - (d.y / maxY) * chartHeight + padding,
  }));

  // Create path string
  const pathD = `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")}`;

  return (
    <Card className="w-full h-full bg-[#1a1a1a] p-4">
      <div className="text-white mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <svg width={width} height={height}>
        {/* Grid lines */}
        {[...Array(5)].map((_, i) => (
          <React.Fragment key={i}>
            <line
              x1={padding}
              y1={padding + (i * chartHeight) / 4}
              x2={width - padding}
              y2={padding + (i * chartHeight) / 4}
              stroke="#333"
              strokeWidth="1"
            />
            <text
              x={padding - 10}
              y={padding + (i * chartHeight) / 4}
              fill="#666"
              textAnchor="end"
              alignmentBaseline="middle"
              fontSize="12"
            >
              {Math.round(maxY - (i * maxY) / 4)}
            </text>
          </React.Fragment>
        ))}

        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={padding + (i * chartWidth) / (data.length - 1)}
            y={height - padding / 2}
            fill="#666"
            textAnchor="middle"
            fontSize="12"
          >
            {d.x}
          </text>
        ))}

        {/* Animated line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Data points */}
        {points.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#7C3AED"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 + i * 0.1 }}
          />
        ))}
      </svg>
    </Card>
  );
};

export default LineChart;
