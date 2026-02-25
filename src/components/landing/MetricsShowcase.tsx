import { useState } from 'react';
import { Card } from '../ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const lineChartData = [
  { x: 'Jan', y: 10 },
  { x: 'Feb', y: 20 },
  { x: 'Mar', y: 15 },
  { x: 'Apr', y: 25 },
  { x: 'May', y: 30 },
];

const barChartData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 85 },
  { label: 'Apr', value: 35 },
  { label: 'May', value: 55 },
];

export default function MetricsShowcase() {
  const [activeChart, setActiveChart] = useState<'line' | 'bar'>('line');

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground text-balance">
            Real-time Metrics & Analytics
          </h2>
          <p className="text-lg text-foreground/60 mt-4">
            Visualize your business performance with interactive charts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart Toggle */}
          <Card className="p-8 rounded-2xl border border-border">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-foreground">
                Growth Trends
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveChart('line')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeChart === 'line'
                      ? 'bg-foreground text-background'
                      : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                  }`}
                >
                  Line
                </button>
                <button
                  onClick={() => setActiveChart('bar')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeChart === 'bar'
                      ? 'bg-foreground text-background'
                      : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                  }`}
                >
                  Bar
                </button>
              </div>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                {activeChart === 'line' ? (
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="x" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="y"
                      stroke="#000"
                      strokeWidth={3}
                      dot={{ fill: '#000', r: 5 }}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                ) : (
                  <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="label" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar
                      dataKey="value"
                      fill="#000"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Key Metrics Cards */}
          <div className="space-y-6">
            <Card className="p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-foreground/70 text-sm font-medium">
                    Peak Performance
                  </p>
                  <h3 className="text-4xl font-bold text-foreground mt-2">
                    +30%
                  </h3>
                  <p className="text-foreground/60 text-sm mt-2">
                    In May compared to baseline
                  </p>
                </div>
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  📈
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-foreground/70 text-sm font-medium">
                    Average Growth
                  </p>
                  <h3 className="text-4xl font-bold text-foreground mt-2">
                    +13%
                  </h3>
                  <p className="text-foreground/60 text-sm mt-2">
                    Monthly average increase
                  </p>
                </div>
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  📊
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-foreground/70 text-sm font-medium">
                    Data Points
                  </p>
                  <h3 className="text-4xl font-bold text-foreground mt-2">
                    5 Months
                  </h3>
                  <p className="text-foreground/60 text-sm mt-2">
                    Real historical data tracked
                  </p>
                </div>
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  📅
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
