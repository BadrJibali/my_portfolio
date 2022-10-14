<template>
<router-link :to="{ name: 'blog', params: { id: id } }">
  <div class="card border-0 rounded-4 h-100 overflow-hidden shape-alt-background-color text-color parent">
    <div class="img-lay position-relative overflow-hidden">
      <img class="img-fluid border-0 card-img-top" :src="require(`@/${img}`)" >
    </div>
    <div class="card-body hi p-4  position-relative">
      <div class="">
        <h5 class="card-title pt-0 pt-md-1 pt-lg-2 m-0 fw-bold text-uppercase line">{{ title }}</h5>
      </div>
      <div class="pt-2">
        <p class="card-text pt-2 pb-2 w-100 size">{{ paragraphs | shorten('90', '...') | capitalize() }}.</p>
      </div>
    </div>
  </div>
</router-link>
</template>

<script>
  export default {
    name: 'blog-card',
    props: {
      id: {
        type: [ String, Number ],
      },

      img: {
        type: [ String, Number ],
      },

      title: {
        type: String,
      },

      paragraphs: {
        type: String,
      },
    },
    filters: {
      shorten: function(value, textLength, afterText) {
        return value.substring(0, textLength) + afterText;
      },
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<style lang="scss" scoped>
.parent {
  transition: var(--main-transition);


  .img-lay {

    cursor: pointer;
    border-bottom: 0.4em solid var(--alt-main-color);

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: #00ffb313;
      z-index: 1000;
    }
  }
  
  img, h5 {
    transition: var(--main-transition);
  }

  &:hover {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  &:hover img {
    transform: scale(1.15) rotateZ(3deg);
  }

  &:hover h5 {
    color: var(--alt-main-color);
  }
}

.size {
  font-size: 15px;
}

// Animation
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>