let ctx = document.getElementById("voteChart").getContext("2d");

// Bar gradients
let orangeGradient = ctx.createLinearGradient(0, 0, 0, 400);
orangeGradient.addColorStop(0, "#ffcc80"); // light orange
orangeGradient.addColorStop(1, "#ff9800"); // deep orange

let greenGradient = ctx.createLinearGradient(0, 0, 0, 400);
greenGradient.addColorStop(0, "#a5d6a7"); // light green
greenGradient.addColorStop(1, "#4caf50"); // deep green

// Background gradient plugin
const peachBackground = {
  id: "peachBackground",
  beforeDraw: (chart) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) return;

    let gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, "#ffe5b4");   // light peach
    gradient.addColorStop(1, "#ffd1a1");   // deeper peach

    ctx.save();
    ctx.fillStyle = gradient;
    ctx.fillRect(chartArea.left, chartArea.top, chartArea.width, chartArea.height);
    ctx.restore();
  }
};

let voteChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Modi Ji 🟧", "Mamta Di 🟩"],
    datasets: [
      {
        label: "Votes",
        data: [0, 0],
        backgroundColor: [orangeGradient, greenGradient],
        borderColor: ["#e65100", "#1b5e20"],
        borderWidth: 2,
        borderRadius: 10,
        barThickness: 80
      }
    ]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500,       // smooth animation
      easing: "easeOutBounce"
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return `Votes: ${context.raw}`;
          }
        }
      },
      datalabels: {
        anchor: "end",
        align: "top",
        color: "#000",
        font: {
          weight: "bold",
          size: 16
        },
        formatter: (value) => value
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 16, weight: "bold" },
          color: "#003366"
        }
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(0,0,0,0.1)" },
        ticks: { stepSize: 1, font: { size: 14 } }
      }
    }
  },
  plugins: [ChartDataLabels, peachBackground]
});
