<template>
  <nav class="d-flex flex-column gap-4 w-auto fs-6">
    <router-link class="border-0 rounded-circle shape-alt-background-color position-relative w" :to="{ name: 'home' }"><font-awesome-icon class="text-color position-absolute top-50 start-50 translate-middle" icon="house-chimney"/><h6 class="text-color position-absolute text-uppercase fw-bold fs-8 t">Home</h6></router-link>
    <router-link class="border-0 rounded-circle shape-alt-background-color position-relative w" :to="{ name: 'about' }"><font-awesome-icon class="text-color position-absolute top-50 start-50 translate-middle" icon="user"/><h6 class="text-color position-absolute text-uppercase fw-bold fs-8 t">About</h6></router-link>
    <router-link class="border-0 rounded-circle shape-alt-background-color position-relative w" :to="{ name: 'portfolio' }"><font-awesome-icon class="text-color position-absolute top-50 start-50 translate-middle" icon="briefcase"/><h6 class="text-color position-absolute text-uppercase fw-bold fs-8 t">Portfolio</h6></router-link>
    <router-link class="border-0 rounded-circle shape-alt-background-color position-relative w" :to="{ name: 'contact' }"><font-awesome-icon class="text-color position-absolute top-50 start-50 translate-middle" icon="at"/><h6 class="text-color position-absolute text-uppercase fw-bold fs-8 t">Contact</h6></router-link>
    <router-link class="border-0 rounded-circle shape-alt-background-color position-relative w" :to="{ name: 'blogs' }"><font-awesome-icon class="text-color position-absolute top-50 start-50 translate-middle" icon="comments"/><h6 class="text-color position-absolute text-uppercase fw-bold fs-8 t">Blog</h6></router-link>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss" scoped>
a {
  transition: var(--main-transition);

  &.router-link-exact-active {
    background: var(--alt-main-color);
  }
}

.w {
  padding: 1.6rem;
  transition: var(--main-transition);
}

.t {
  transform: translate(-83%, -50%);
  top: 50%;
  left: 50%;
  width: fit-content;
  padding: 1rem 3rem 1rem 1.1rem;
  margin: 0;
  background: var(--reverse-gradient-color);
  border-radius: 2rem;
  z-index: -1;
  opacity: 0;
  transition: var(--main-transition);
}
.w:hover {
  background: var(--gradient-color);
}
.w:hover .t {
  opacity: 1;
  transform: translate(-87%, -50%);
}

</style>