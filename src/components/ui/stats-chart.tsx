'use client';

import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface StatsChartProps {
  type: 'line' | 'bar';
  title: string;
  labels: string[];
  data: number[];
  color?: string;
}

export function StatsChart({ type, title, labels, data, color = '#f97316' }: StatsChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor: color,
        backgroundColor: type === 'line' ? 'transparent' : `${color}80`,
        borderWidth: 2,
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgb(148 163 184)',
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgb(30 41 59)',
        titleColor: 'rgb(241 245 249)',
        bodyColor: 'rgb(241 245 249)',
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(100, 116, 139, 0.1)',
        },
        ticks: {
          color: 'rgb(148 163 184)',
        },
      },
      y: {
        grid: {
          color: 'rgba(100, 116, 139, 0.1)',
        },
        ticks: {
          color: 'rgb(148 163 184)',
        },
      },
    },
  };

  if (!mounted) {
    return <div className="h-64 w-full animate-pulse rounded-xl bg-slate-800/50"></div>;
  }

  return (
    <div className="h-64 w-full">
      {type === 'line' ? (
        <Line data={chartData} options={options} />
      ) : (
        <Bar data={chartData} options={options} />
      )}
    </div>
  );
} 