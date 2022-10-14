<template>
  <div id="app">
    <div class="z-index position-fixed top-50 end-0 translate-middle-y w-auto m-0">
      <Navbar class="me-4 d-none d-sm-none d-md-none d-lg-flex"/>
    </div>
    <div class="background-color">
      <OffcanvasMenu/>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Global/Navbar.vue";
import OffcanvasMenu from "@/components/Global/OffcanvasMenu.vue";

export default {
  name: 'app',
  components: {
    Navbar,
    OffcanvasMenu
  },
};
</script>

<style lang="scss">
/* Start Font Family import */
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
/* End Font Family import */

:root {
  --main-color: #013a34;
  --alt-main-color: #1de9b6;
  --alt-main-color-hover: #1de9b686;
  --alt-main-color-trans: #1de9b604;
  --background-color: #000000;
  --background-spinner-color: #013a34e7;
  --pattern-line-color: #070707;
  --stroke-color: #ffffff12;
  --alt-background-color: #f5f5f5;
  --shape-background-color: #181818;
  --alt-shape-background-color: #f5f5f5;
  --text-color: #ffffff;
  --alt-text-color: #050505;
  --light-text-color: #808080;
  --external-color: #080808;
  --error-color: #ff1313;
  --susses-color: #73ff01;
  --gradient-color: linear-gradient(90deg, var(--alt-main-color), var(--main-color));
  --reverse-gradient-color: linear-gradient(90deg, var(--main-color), var(--alt-main-color));
  --alt-font: "Rubik Moonrocks", cursive;
  --main-transition: 0.7s all ease;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  scroll-behavior: smooth;
}
body {
  overflow-x: hidden;
  /* Start Font Family */
  font-family: "Titillium Web", sans-serif;
  /* End Font Family */
  background-color: var(--background-color);
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  transition: var(--main-transition);
  text-decoration: none;

  &.router-link-exact-active {
    color: var(--alt-main-color);
  }
}


.main-color {
  color: var(--main-color);
}

.alt-main-color {
  color: var(--alt-main-color);
}

.background-color {
  background: var(--background-color);
}

.alt-background-color {
  background: var(--alt-background-color);
}

.shape-alt-background-color {
  background: var(--shape-background-color);
}

.text-color {
  color: var(--text-color);
}

.alt-text-color {
  color: var(--alt-text-color);
}

.gradient-color {
  background: var(--gradient-color);
}

.alt-font {
  font-family: var(--alt-font);
}

.main-transition {
  transition: var(--main-transition);
}

.fs-7 {
  font-size: 0.875em;
}

.fs-8 {
  font-size: 0.8125em;
}

.fs-9 {
  font-size: 0.625em;
}

.z-index {
  z-index: 1000;
}

.w-85 {
  width: 85% !important;
}

.w-90 {
  width: 90% !important;
}

/* width */
::-webkit-scrollbar {
  width: 0.6rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--background-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--alt-main-color);
  border-radius: 2rem;
  transition: var(--main-transition);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--main-color);
}
</style>
