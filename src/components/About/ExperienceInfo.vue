<template>
<div class="d-flex gap-4 overflow-hidden">
  <div class="w-auto">
    <div class="gradient-color width-icon rounded-circle position-relative">
      <font-awesome-icon class="line text-color position-absolute top-50 start-50 translate-middle" icon="briefcase" />
    </div>
  </div>
  <div class="d-flex flex-column justify-content-evenly">
    <div class="width-span mb-3 shape-alt-background-color rounded-pill">
      <span class="fs-8 text-color px-2 text-uppercase">{{from}} - {{to}}</span>
    </div>
    <div class="w-75 mb-2">
      <h6 class="text-color m-0 lh-lg text-uppercase"><span class="fw-bold">{{job}}</span> <span class="mx-1">-</span> <span class="fw-normal">{{place}}</span></h6>
    </div>
    <div class="width mb-2">
      <p class="fs-8 fw-normal lh-lg text-color m-0">{{description}}.</p>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'experience-education',
    props: {
      from: {
        type: {String, Number},
        default: 2022
      },
      to: {
        type: {String, Number},
        default: "now"
      },
      job: {
        type: String,
        default: 'web developer'
      },
      place: {
        type: String,
        default: 'egypt'
      },
      description: {
        type: String,
        default: 'you are a good man'
      },
    },
  }
</script>

<style lang="scss" scoped>
.width-icon {
  width: 2.7em;
  height: 2.7em;

    &::after {
      content: "";
      width: 0.1em;
      height: 20em;
      background: var(--gradient-color);
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
}

.width-span {
  width: fit-content;
}

.width {
  width: 60%;

  @media (max-width: 991.98px) {
    width: 83%;
  }
}
</style>