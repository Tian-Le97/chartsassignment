import { Bubble } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
            labels: [],
        datasets: []
        },
        options: {
            title: {
              display: true,
              text: 'GDP, Happiness and Population'
            }, 
            scales: {
              yAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "Happiness"
                }
              }],
              xAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "GDP (PPP)"
                }
              }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('newBubble').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            this.datacollection.labels.push(doc.data().label)
            this.datacollection.datasets.push(doc.data().dataset)
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}