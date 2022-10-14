<template>
<div class="d-flex flex-column justify-content-center align-items-center">
  <radial-progress-bar
    :diameter="180"
    :completed-steps="percent"
    :total-steps="totalSteps"
    :startColor="startColor"
    :stopColor="stopColor"
    :animateSpeed="2000"
    :innerStrokeColor="innerStrokeColor"
    >
    <p class="fs-3 text-color m-0 w-auto fw-bold">{{ percent }} %</p>
  </radial-progress-bar>
  <p class="text-color mt-3 fw-bold text-uppercase">{{lang}}</p>
</div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

  export default {
    name: 'progress-circle',
    props: {
      percent: {
        type: {Number, String},
        default: 50
      },
      lang: {
        type: String,
        default: 'technology'
      },
    },
    components: {
      RadialProgressBar
    },
    data() {
      return {
        completedSteps: 80,
        totalSteps: 100,
        startColor: '#1de9b6',
        stopColor: '#013a34',
        innerStrokeColor: '#ffffff12',

      }
    },
  }
</script>

<style lang="scss" >
div {
  font-family: 'Poppins', sans-serif;
}
</style>