<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['January', 'February','March','April','May','June','July'],
      datasets: [
        {
          label: 'Push up',
          backgroundColor: '#bc5090',
          data: [99,100, 105, 120, 125, 110, 125,130],
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
