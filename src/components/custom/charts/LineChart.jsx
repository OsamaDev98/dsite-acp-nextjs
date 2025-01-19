"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function LineChart({data}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const noDataPluginLines = {
    id: "noData",
    afterDraw: (chart) => {
      const {
        ctx,
        data,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "500 20px Verdana";
      ctx.fillStyle = "#ddd";
      ctx.fillText("No Data", left + width / 2, top + height / 2);
      ctx.restore();
    },
  };

  const options = {
    responsive: true,
    plugins: [data == "true" ? "" : noDataPluginLines]
  };

  /* Line Charts */
  const lineLabels = [
    "01/09/2024",
    "02/09/2024",
    "03/09/2024",
    "04/09/2024",
    "05/09/2024",
    "06/09/2024",
    "07/09/2024",
    "08/09/2024",
    "09/09/2024",
    "10/09/2024",
  ];
  const lineData = {
    labels: lineLabels,
    datasets: [
      {
        label: "Visitors",
        data: data == "true" ? [65, 59, 80, 81, 56, 55, 40, 50, 90, 41] : [],
        fill: false,
        pointRadius: 4,
        borderColor: "#23aefc",
        backgroundColor: "#23aefc",
        borderJoinStyle: "round",
        // to control bar shape (curve or sharp)
        tension: 0.1,
      },
      {
        label: "Page views",
        data: data == "true" ? [45, 79, 90, 41, 96, 15, 30, 23, 40, 50] : [],
        fill: false,
        pointRadius: 4,
        borderColor: "#43e0aa",
        backgroundColor: "#43e0aa",
        borderJoinStyle: "round",
        // to control bar shape (curve or sharp)
        tension: 0.1,
      },
    ],
  };

  return <Line options={options} data={lineData} />;
}
