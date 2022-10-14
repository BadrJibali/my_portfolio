<template>
<section class="w-auto">
  <div class="d-flex justify-content-center align-items-center">
    <div class="width rounded-circle position-relative d-flex justify-content-center align-items-center">
      <div class="inside position-absolute rounded-circle d-flex flex-column justify-content-center align-items-center">
        <div class="position-relative me-2">
          <h1 class="alt-main-color text-center m-0 text-uppercase display-4 fw-bold">{{total}}<small class="ms-1 mt-1 fw-normal fs-3 position-absolute top-0">+</small></h1>
        </div>
        <div class="position-relative w-auto text-center">
          <h5 class="text-color mx-auto border-color text-center mt-2 fs-7 text-uppercase">{{title}}</h5>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  export default {
    name: 'personal-box',
    props: {
      total: {
        type: Number,
        default: '1'
      },
      title: {
        type: String,
        default: 'opinion'
      },
    },
  }
</script>

<style lang="scss" scoped>
.width {
  width: 12rem;
  height: 12rem;
  margin: 0.5em;
  z-index: 100;
  overflow: hidden;
  // @media (max-width: 991.98px) {
  //   width: 10rem;
  //   height: 10rem;
  // }
  @media (max-width: 767.98px) {
    width: 9rem;
    height: 9rem;
  }
  @media (max-width: 575.98px) {
    width: 9rem;
    height: 9rem;
  }

  &::before {
    content: "";
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
    width: 12rem;
    height: 12rem;
    z-index: 10;
    overflow: hidden;
    background: var(--gradient-color);
    animation: change-color 3s infinite linear;

    // @media (max-width: 991.98px) {
    //   width: 10rem;
    //   height: 10rem;
    // }
    @media (max-width: 767.98px) {
    width: 9rem;
    height: 9rem;
  }
    @media (max-width: 575.98px) {
      width: 9rem;
      height: 9rem;
    }
  }

  .inside {
    background: var(--background-color);
    width: 11rem;
    height: 11rem;
    overflow: hidden;
    z-index: 100;

    // @media (max-width: 991.98px) {
    //   width: 9rem;
    //   height: 9rem;
    // }
    @media (max-width: 767.98px) {
    width: 9rem;
    height: 9rem;
  }
    @media (max-width: 575.98px) {
      width: 8rem;
      height: 8rem;
    }
  }

  .border-color {
    width: 70%;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2rem;
      background: var(--alt-main-color);
      width: 3.5rem;
      height: 0.12rem;
    }
  }

  @keyframes change-color {
    from {transform:  rotateZ(0deg);}
    to {transform:  rotateZ(360deg);}
  }
}
</style>