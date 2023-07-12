<template>
  <section class="home">
    <div class="clip overflow-hidden bg-color"></div>
    <div class="container-fluid pt-5 pt-md-0 pt-lg-0">
      <div class="row pt-sm-5 pt-5 pt-md-0 pt-lg-0 vh-100  justify-content-center align-items-center">
        <div class="col-12 col-md-6 col-lg-4 img ">
          <ul class="d-flex justify-content-center align-items-center">
            <li class="w-75 shadow-lg">
              <img class="img-fluid rounded-4" :src="require(`@/${home.img}`)" alt="Badr">
              <span class="sss"></span>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-7 mt-5 text-color">
          <div class="d-flex flex-lg-row flex-md-column flex-column mx-auto mx-sm-auto mx-md-0 mx-lg-0 align-items-center align-items-sm-center align-items-md-start align-items-lg-start">
            <div class="alt-main-color me-3 mb-3 d-none d-sm-none d-md-block display-6"></></div>
            <div class="d-flex flex-column mx-sm-auto mx-auto mx-md-0 mx-lg-0 justify-content-center align-items-center align-items-sm-center align-items-md-start align-items-lg-start">
              <h1 class="alt-main-color text-uppercase fw-bold">I'm {{ home.designerName }}.</h1>
              <h2 class="text-uppercase fw-bold">{{ home.designerTitle }}</h2>
            </div>
          </div>
          <p class="mx-sm-auto mx-auto mx-md-0 mx-lg-0 mt-3 lh-lg width">{{ home.designerDescription }}.</p>
          <div class="d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start">
            <Button :path="button.path" :icon="button.icon" class="mt-5 mb-5 pt-1">more about me</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GetData from '@/services/GetData.js';
import Button from '@/components/Global/Button.vue';


export default {
  name: 'Home',
  components: {
    Button,
  },
  data() {
    return {
      home: {},
      button: {
        path: 'about',
        icon: 'arrow-right'
      }
    }
  },

  created () {
    GetData.getHome()
    .then(response => {
      this.home = response.data
    })
    .catch(error => {
      console.log( `There was an error: ${error.response}`);
    })
  },
}


</script>

<style lang="scss" scoped>
.home {
  font-family: 'Poppins', sans-serif;
  $line-color: var(--pattern-line-color);
  background-color: var(--background-color);
	background-image:
		// <> 
		linear-gradient(
		    25deg,
			  transparent 65%,
			  $line-color,
			  transparent 70%
		    ),
		linear-gradient(
		    -25deg,
			  transparent 65%,
			  $line-color,
			  transparent 70%
		    ),
		linear-gradient(
		    -25deg,
			  transparent 30%,
			  $line-color,
			  transparent 35%
		    ),
		linear-gradient(
		    25deg,
			  transparent 30%,
			  $line-color,
			  transparent 35%
		    ),		
		
		// ◊
		linear-gradient(
		    65deg,
			  transparent 65%,
			  $line-color,
			  transparent 70%
		    ),
		linear-gradient(
		    -65deg,
			  transparent 65%,
			  $line-color,
			  transparent 70%
		    ),
		linear-gradient(
		    -65deg,
			  transparent 30%,
			  $line-color,
			  transparent 35%
		    ),
		linear-gradient(
		    65deg,
			  transparent 30%,
			  $line-color,
			  transparent 35%
		    );
	background-size: 
		5em 2em,
		5em 2em,
		5em 2em,
		5em 2em,
		
		2em 5em,
		2em 5em,
		2em 5em,
		2em 5em;
	}

.img {
  z-index: 100;
}

.width {
  width: 30rem;

  @media (max-width: 991.98px) {
    width: 78%;
  }
  @media (max-width: 767.98px) {
    width: 75%;
  }
  @media (max-width: 575.98px) {
    width: 80%;
    text-align: center;
  }
}

.bg-color {
  width: 100%;
  height: 100%;
  padding: 30rem 5rem;
  background: var(--alt-main-color);
  position: fixed;
  z-index: 1;
}

.clip {
  clip-path: polygon(0% 0%, 18% 0, 5% 100%, 0% 100%);
}

li {
  position: relative;

  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    border-radius: 1rem;
    border: none;
    background-color: var(--background-color);
    animation: rotate 3s infinite linear;
  }

  &::before {
    width: 0.8rem;
    height: 6rem;
    transform: translate(-235%, -50%);
  }

  &::after {
    width: 6rem;
    height: 0.8rem;
    transform: translate(-50%, -235%);
  }

  .sss {

  &::before, &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1200;
    border-radius: 1rem;
    border: none;
    background-color: var(--alt-main-color);
    animation: rotate 3s infinite linear;
  }

  &::before {
    width: 0.8rem;
    height: 6rem;
    transform: translate(235%, 50%);
  }

  &::after {
    width: 6rem;
    height: 0.8rem;
    transform: translate(50%, 235%);
  }
  }
}

@keyframes rotate {
  0% {
    opacity: 0;
  }
  25%{
    opacity: 0.5;
  }
  50%{
    opacity: 1;
  }
  75%{
    opacity: 0.75;
  }
  100%{
    opacity: 0;
  }
}

</style>
