<template>
  <div class="u-flex c-graph4 slider-4">
    <div class="col-12">
      <p class=" h3 u-center">NOTRE CONSOMMATION EN EAU</p>
      <p class="title p-italic">
        → La consommation moyenne d'eau d'un francais par jour ...
      </p>
    </div>
    <div class="col-12">
      <p class="text--xl u-center">{{ this.dailyValue }} L / jour</p>
      <div class="content-chart">
        <canvas id="planet-chart"></canvas>
      </div>
    </div>
  </div>
</template>


<script>
import Chart from "chart.js";
import planetChartData from "../chart-data.js";

export default {
  name: "Sldier4",
  data() {
    return {
      height: 10,
      dailyValue: 10,
      planetChartData: planetChartData,
      items: [
        {
          name: "Douche",
          value: 39,
          isActive: true,
        },
        {
          name: "WC",
          value: 20,
          isActive: true,
        },
        {
          name: "Linge",
          value: 12,
          isActive: true,
        },
        {
          name: "Vaisselle",
          value: 10,
          isActive: true,
        },
        {
          name: "Nourriture",
          value: 6,
          isActive: true,
        },
        {
          name: "Divers",
          value: 6,
          isActive: true,
        },
        {
          name: "Arrosage",
          value: 6,
          isActive: false,
        },
        {
          name: "Eau potable",
          value: 1,
          isActive: false,
        },
      ],
    };
  },

  mounted() {
    this.createChart("planet-chart", this.planetChartData);
  },

  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });

      console.log(myChart);
      var arrayValue = chartData.data.datasets.map((item) => item.data);
      console.log("array: ", arrayValue[0]);
      var totalvalue = arrayValue[0].reduce((acc, item) => {
        return acc + item;
      });

      console.log("Moyenne: ", totalvalue);

      this.dailyValue = (totalvalue * 148) / 94;
    },

    calcHeight: function () {
      var arrayNumber = this.items.map((item) => {
        if (item.isActive == true) {
          return item.value;
        } else {
          return 0;
        }
      });

      var totalHeight = arrayNumber.reduce((acc, item) => {
        this.height = acc + item;
        return acc + item;
      });

      console.log(totalHeight);
    },
  },
};
</script>