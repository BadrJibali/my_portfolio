<template>
<section >

  <button type="button" class="hover-img overflow-hidden rounded-4" data-bs-toggle="modal" :data-bs-target="`#dataTarget${index}`">
    <img class="img-fluid" :src="require(`@/${img[0]}`)" :alt="name">
    <h4 class="w-100 fw-bold text-uppercase position-absolute top-50 start-50 translate-middle">{{name}}</h4>
  </button>


  <div class="modal fade" data-bs-backdrop="static" :id="`dataTarget${index}`" tabindex="-1" :aria-labelledby="`dataTarget${index}Label`" aria-hidden="true">
    <div class="modal-dialog border-0 w modal-dialog-centered">
      <div class="modal-content overflow-hidden rounded-4">

        <div class="modal-header py-1 pb-0 border-0 ba-header overflow-hidden position-relative justify-content-center align-items-center" :id="`dataTarget${index}Label`">
          <a class="carousel-control-prev w-auto px-3" type="button" :href="`#dataTargets${index}`" data-bs-slide="prev">
            <font-awesome-icon class="m-0 fs-5 alt-main-color" aria-hidden="true" icon="arrow-left" />
          </a>

          <button type="button" class="btn border-0 text-color m-auto" data-bs-dismiss="modal" aria-label="Close">
            <font-awesome-icon class="m-0 fs-5 alt-main-color" aria-hidden="true" icon="xmark" />
          </button>

          <a class="carousel-control-next w-auto px-3" type="button" :href="`#dataTargets${index}`" data-bs-slide="next">
            <font-awesome-icon class="m-0 fs-5 alt-main-color" aria-hidden="true" icon="arrow-right" />
          </a>
        </div>

        <div class="modal-body ba">
          <div class="w-100">
            <div :id="`dataTargets${index}`" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">

                <div class="pt-1 px-2 text-color text-center">
                  <h4 class="mb-3 fw-bold text-uppercase alt-main-color">{{name}}</h4>
                  <div class="d-flex flex-md-row flex-lg-row flex-column pb-2 justify-content-between text-start">
                    <div class="d-flex mb-2 gap-2 flex-column">
                      <div class="d-flex fs-7 gap-2">
                        <font-awesome-icon class="m-0 mt-1" icon="file-code" />
                        <p class="m-0 text-capitalize">project : <span class="fw-bold">{{project}}</span></p>
                      </div>
                      <div class="d-flex fs-7 gap-2">
                        <font-awesome-icon class="m-0 mt-1" icon="code" />
                        <p class="m-0 text-start text-capitalize">languages : <span v-for="(lang, index) in languages" :key="index" class="fw-bold text-uppercase">{{`${((index) >= (languages.length - 1) ? lang : `${lang}, ${' '}`)}`}}</span></p>
                      </div>
                    </div>
                    <div class="d-flex mb-2 gap-2 flex-column">
                      <div class="d-flex fs-7 gap-2">
                        <font-awesome-icon class="m-0 mt-1" icon="user" />
                        <p class="m-0 text-capitalize">client : <span class="fw-bold">{{client}}</span></p>
                      </div>
                      <div class="d-flex fs-7 gap-2">
                        <font-awesome-icon class="m-0 mt-1" icon="eye" />
                        <p class="m-0 text-capitalize">preview : <a :href="preview" class="fw-bold link-hover text-lowercase alt-main-color">{{preview}}</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div data-bs-interval="3000" v-for="(image, index) in img" :key="index" :class="index == 0 ? 'active' : '' " class="carousel-item px-2 pb-2">
                  <img class="img-fluid overflow-hidden rounded-3" :src="require(`@/${image}`)" :alt="name">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
</template>

<script>


  export default {
    name: 'grid-gallery',
    props: {
      index: {
        type: String,
      },
      name: {
        type: String,
        default: 'Google'
      },
      img: {
        type: String,
        default: 'assets/imgs/my_portfolio/portfolio-1.jpg'
      },
      project: {
        type: String,
        default: 'Google'
      },
      languages: {
        type: String,
        default: 'html'
      },
      client: {
        type: String,
        default: 'badr jibali'
      },
      preview: {
        type: String,
        default: 'www.google.com'
      },
    },
  }
</script>

<style lang="scss" scoped>
.hover-img {
  position: relative;
  transition: var(--main-transition);

  h4 {
    z-index: -1;
    transition: calc( var(--main-transition) - 0.4s);
    color: var(--main-color);
  }

  &::before {
    content: "";
    border-radius: 0.8em;
    width: 100%;
    height: 100%;
    background: var(--alt-main-color-hover);
    position: absolute;
    transition: var(--main-transition);
    transform: scale(0);
  }

  &:hover::before {
    transform: scale(1.3);
  }

  &:hover h4 {
    z-index: 1000;
  }
}

.modal-content {
  background-color: transparent !important;
  overflow: hidden;
}

.w {
  max-width: 37em !important;

}

.ba {
  background: var(--shape-background-color);
}

.ba-header {
  background: var(--main-color);
}

.link-hover {
  &:hover {
    color: var(--light-text-color);
  }
}
</style>