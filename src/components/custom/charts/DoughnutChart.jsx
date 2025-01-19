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
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ data }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  const noDataPluginDoughnut = {
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

  const doughnutNoData = {
    labels: [],
    datasets: [
      {
        data: [0, 0, 1],
        backgroundColor: ["#24AEFC", "#43E0AA", "#fafafa"],
        borderColor: ["#24AEFC", "#43E0AA", "#fafafa"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: [data == "true" ? "" : noDataPluginDoughnut],
  };

  const doughnutData = {
    labels: ["Iphone", "Computer", "Android"],
    datasets: [
      {
        data: [300, 50, 100],
        borderColor: ["#24AEFC", "#43E0AA", "#935CCB"],
        backgroundColor: ["#24AEFC", "#43E0AA", "#935CCB"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Doughnut
      options={options}
      data={data == "true" ? doughnutData : doughnutNoData}
    />
  );
}
