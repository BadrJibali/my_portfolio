<template>
<section class="position-relative overflow-hidden">
  <vue-particles color="#1de9b6" :particleOpacity="0.5" :particlesNumber="120" shapeType="circle" linesColor="#00897b" :moveSpeed="8" hoverMode="repulse"></vue-particles>
  <div class="text-uppercase text-center position-absolute top-50 start-50 translate-middle">
    <h1 class="text-color display-5 fw-bold m-0 user-select-none">{{first}} <span class="alt-main-color">{{second}}</span></h1>
    <p class="display-1 font fw-bold m-0 position-absolute top-50 start-50 translate-middle">{{backWord}}</p>
  </div>
</section>
</template>

<script>
  export default {
    name: 'section-title',
    props: {
      first: {
        type: String,
        default: 'Welcome'
      },
      second: {
        type: String,
        default: 'You'
      },
      backWord: {
        type: String,
        default: 'Hello'
      },
    },
  }
</script>

<style lang="scss" scoped>
section {
  font-family: 'Poppins', sans-serif;
  height: 15em;
  background: var(--alt-main-color-trans);

  .font {
    font-size: 7em;
    letter-spacing: 0.1em;
    z-index: -1;
    -webkit-text-stroke: 0.005em var(--stroke-color);
    color: transparent;

    @media (max-width: 575.98px) {
      font-size: 3.8em;
    }
  }
}

.p {
  height: 20em;
  width: 100%;
  z-index: -1;
}
</style>