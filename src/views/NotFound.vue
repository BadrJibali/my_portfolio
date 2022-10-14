<template>
<div>
  <div class="container">
    <div class="row position-relative vh-100">
      <div class="position-absolute w-auto top-50 start-50 translate-middle text-center">
        <h1 class="mb-4">Oops !</h1>
        <p class="fs-3 fw-bold alt-main-color">404 - page not found</p>
        <p class=" w-85 mx-auto fw-bold text-color">The page you ara looking for not available for now.</p>
        <p class="fs-6 fw-light w-75 mx-auto fw-bold text-color mb-3">You can return to our home page from here.</p>
          <Button class="text-color mx-auto" path="home" icon="house">go home</Button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Button from '@/components/Global/Button.vue';

  export default {
    name: '404-not-found',
    components: {
      Button,
    },
  }
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Poppins", sans-serif;
  font-size: 8em;
  width: 100%;
  margin: 0;
  font-weight: 700;
  background: url("@/assets/imgs/back (4).jpg") no-repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent;

    @media (max-width: 991.98px) {
      font-size: 6em;
    }
    @media (max-width: 767.98px) {
      font-size: 4em;
    }

}
</style>