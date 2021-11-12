<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  props: {
  exercise: String,
  },
  data: () => ({
    chartdata: {
      labels: ['January', 'February','March','April','May','June','July'],
      datasets: []
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    console.log("mounted " + this.exercise)
    this.chartdata.datasets = [];
    if(this.exercise =="Push Up"){
      console.log(this.chartdata.datasets)
      this.chartdata.datasets.push(
        {
          label: 'Push up',
          backgroundColor: '#bc5090',
          data: [99,100, 105, 120, 125, 110, 125,130],
        }
      )
    }

    this.renderChart(this.chartdata, this.options)

    /*
    switch(this.exercise){
      case "Push Up":
        this.datasets.push(   {
          label: 'Push up',
          backgroundColor: '#bc5090',
          data: [99,100, 105, 120, 125, 110, 125,130],
        });
        break;
        case "Squat" : 
         this.datasets.push(     {
          label: 'Squat',
          backgroundColor: '#FFD500',
          data: [99,100, 105, 120, 125, 110, 125,130],
        });
        break;
        case "Plank" : 
         this.datasets.push(     {
          label: 'Plank',
          backgroundColor: '#FFD500',
          data: [99,100, 105, 120, 125, 110, 125,130],
        });
        break;
    }
    */
      
    
  }
}
</script>
