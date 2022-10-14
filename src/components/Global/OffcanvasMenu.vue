<template>
  <section class="position-relative w-100">
    <button class="d-lg-none position-fixed end-0 translate-middle-y btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
      <font-awesome-icon class="alt-main-color mt-5 fs-2 " icon="bars"/>
    </button>
    
    <div class="offcanvas offcanvas-start" data-bs-backdrop="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header back-color-head">
        <h5 class="offcanvas-title text-color" id="offcanvasWithBothOptionsLabel">Menu</h5>
        <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close">
          <font-awesome-icon class="alt-main-color fs-2 " icon="xmark"/>
        </button>
      </div>
      <div class="offcanvas-body z-index pt-4 back-color-can">
        <div class="d-flex flex-column gap-3">
          <router-link class="border-0 d-flex gap-2 text-color" :to="{ name: 'home' }"><font-awesome-icon class="" icon="house-chimney"/><h6 class=" text-uppercase fw-bold">Home</h6></router-link>
          <router-link class="border-0 d-flex gap-2 text-color" :to="{ name: 'about' }"><font-awesome-icon class="" icon="user"/><h6 class=" text-uppercase fw-bold">About</h6></router-link>
          <router-link class="border-0 d-flex gap-2 text-color" :to="{ name: 'portfolio' }"><font-awesome-icon class="" icon="briefcase"/><h6 class=" text-uppercase fw-bold">Portfolio</h6></router-link>
          <router-link class="border-0 d-flex gap-2 text-color" :to="{ name: 'contact' }"><font-awesome-icon class="" icon="at"/><h6 class=" text-uppercase fw-bold">Contact</h6></router-link>
          <router-link class="border-0 d-flex gap-2 text-color" :to="{ name: 'blogs' }"><font-awesome-icon class="" icon="comments"/><h6 class="text-uppercase fw-bold">Blog</h6></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'offcanvas-menu'
  }
</script>

<style lang="scss" scoped>

section {
  z-index: 2000;
  background: transparent;

  a {
    &.router-link-exact-active {
      color: var(--alt-main-color);
    }
  }

  .btn-close:focus {
  box-shadow: none;
}
}

.offcanvas {
  --bs-offcanvas-width: 220px;
}
btn-check:focus+.btn, .btn:focus {
  border-color: transparent !important;
  box-shadow: none;
}
.btn:active {
  border-color: transparent !important;;
}
.btn:hover {
  border-color: transparent !important;;
}
.back-color-can {
  background: var(--main-color);
}
.back-color-head {
  background: var(--shape-background-color);
}
</style>