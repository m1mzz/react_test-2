const tempTransform = {
  Default: ' °K',
  Metric: ' °C',
  Imperial: ' °F'
}

let chartWeather = null

const drawChart = (Chart, domElement, weather, temperatureValue) => {
  const tempUnits = tempTransform[temperatureValue]
  const dates = []
  const temps = []
  const weatherArr = []
  weather.list.forEach(list => {
    dates.push(list.dt_txt)
    temps.push(list.main.temp)
    weatherArr.push(list.weather)
  });
  const config = {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Avg. Temp",
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgb(54, 162, 235)",
          fill: false,
          data: temps,
          weatherArr
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: `Temperature in ${weather.city.name}`
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            const i = tooltipItem.datasetIndex
            const weather = data.datasets[i].weatherArr[i].reduce((acc, val) => `${acc} ${val.main}, `, ' Weather:');
            const weatherWithoutLastSymbol = weather.substring(0, weather.length - 2)
            const label = data.datasets[i].label;
            return `${label ? label + ':' : ''} ${Math.floor(tooltipItem.yLabel)}${tempUnits} ${weatherWithoutLastSymbol}`
          }
        }
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              unit: "hour",
              displayFormats: {
                hour: "M/DD @ hA"
              },
              tooltipFormat: "MMM. DD @ hA"
            },
            scaleLabel: {
              display: true,
              labelString: "Date/Time"
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: `Temperature (${tempUnits})`
            },
            ticks: {
              callback: function(value, index, values) {
                return value + tempUnits;
              }
            }
          }
        ]
      }
    }
  };

  if (chartWeather) {
    chartWeather.destroy()
  }
  chartWeather = new Chart(domElement, config)
};

export default drawChart;