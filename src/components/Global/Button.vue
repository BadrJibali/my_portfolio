<template>
  <button @click="redirectButton" class="btn main rounded-pill overflow-hidden d-flex position-relative justify-content-evenly align-items-center">
    <div class="m-0 p-0 z-index w-auto">
      <a class="text-color a m-auto fs-7 text-uppercase" ><slot></slot></a>
    </div>
    <div class="m-0 p-0 rounded-circle">
      <font-awesome-icon class="back fs-6 text-color rounded-circle position-absolute top-50 translate-middle-y " :icon="icon" />
    </div>
  </button>
</template>

<script>
  export default {
    name: 'button',
    props: {
      path: {
        type: {String, Number},
        require: false,
        default: ''
      },
      icon: {
        type: {String},
        require: true,
        default: 'circle'
      }
    },
    methods: {
      redirectButton() {
        this.$router.push( { name: this.path } );
      }
    }
  }
</script>

<style lang="scss" scoped>
.main {
  width: 13.1rem;
  height: 3rem;
  transition: var(--main-transition);
  border: 0.05rem solid var(--alt-main-color);
  cursor: pointer;
  

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--alt-main-color);
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(99%);
    z-index: 10;
    transition: var(--main-transition);
  }

  &:hover::before, &:hover .back, &:hover .a {
    transform: translateX(0);
    color: var(--main-color);
  }

  .back {
    background: var(--alt-main-color);
    padding: 0.95rem;
    border: 1px solid var(--alt-main-color);
    right: 0%;
    z-index: 100;
    transition: var(--main-transition);
  }

  a:hover {
    color: var(--text-color);
    background: none;
}
}
</style>