import React, { useEffect, useRef } from 'react';
import LineChart from '../../charts/LineChart02';
import {
  Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip,
} from 'chart.js';
import 'chartjs-adapter-moment';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard08({ cpudata, cpulabel, memorydata, memorylabel, storagedata, storagelabel, data }) {

  // console.log(cpudata)

  const canvas = useRef(null);
  const chartValue = useRef(null);
  const chartDeviation = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: cpulabel,
        datasets: data
      },
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            border: {
              display: false,
            },
            suggestedMin: 30,
            suggestedMax: 80,
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => value,
            },
          },
          x: {
            type: 'time',
            time: {
              parser: 'hh:mm:ss',
              unit: 'second',
              tooltipFormat: 'MMM DD, H:mm:ss a',
              displayFormats: {
                second: 'H:mm:ss',
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            titleFont: {
              weight: '600',
            },
            callbacks: {
              label: (context) => context.parsed.y,
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: false,
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Overall</h2>
      </header>
      <div className="grow">
        <canvas ref={canvas} data={data} width={595} height={248}></canvas>
      </div>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {/* <LineChart data={} width={595} height={248} /> */}
    </div>
  );
}

export default DashboardCard08;
