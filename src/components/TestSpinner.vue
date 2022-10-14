<template>
  <div>
    <div class="bar">
      <div class="peg">
      </div>
    </div>
    <div class="spinner" role="spinner">
      <div class="spinner-icon"></div>
      <div class="spinner-icon"></div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
/* Make clicks pass-through */

 .bar {
  background: var(--alt-main-color);

  position: fixed;
  z-index: 1032;
  top: 0;
  left: 0;

  width: 100%;
  height: 4px;

  border-radius: 2em;
}

/* Fancy blur effect */
 .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px var(--alt-main-color), 0 0 5px var(--alt-main-color);
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
 .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  background: var(--background-spinner-color);
  width: 100%;
  height: 100%;

}

 .spinner-icon {
  width: 4em;
  height: 4em;
  box-sizing: border-box;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: solid 4px transparent;
  border-top-color: var(--alt-main-color);
  border-left-color: var(--alt-main-color);
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 600ms linear infinite;
          animation: nprogress-spinner 600ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent  .spinner,
.nprogress-custom-parent  .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


</style>