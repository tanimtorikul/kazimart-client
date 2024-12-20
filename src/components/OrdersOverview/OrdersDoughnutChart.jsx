import { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const OrdersDoughnutChart = ({ orderCounts }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: Object.keys(orderCounts),
      datasets: [
        {
          label: "Order Status Distribution",
          data: Object.values(orderCounts),
          backgroundColor: [
            "#FFA500",
            "#FFFFE0",
            "#ADD8E6",
            "#90EE90",
            "#FFCCCB",
          ],
        },
      ],
    };

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              usePointStyle: true,
              pointStyle: "rounded",
              generateLabels: (chart) => {
                const original =
                  Chart.overrides.doughnut.plugins.legend.labels.generateLabels;
                const labels = original.call(this, chart);
                labels.forEach((label, index) => {
                  label.text += ` (${data.datasets[0].data[index]})`;
                });
                return labels;
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [orderCounts]);

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 my-4">
        Order statistics
      </h2>
      <div style={{ width: "500px", height: "300px" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default OrdersDoughnutChart;
