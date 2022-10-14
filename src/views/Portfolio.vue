<template>
<section>
  <SectionTitle class="mb-2 bv mb-lg-4 mb-lg-5" first="my" second="portfolio" backWord="works"/>
  <div class="container">
    <div class="row w-85 mx-auto mb-5">
      <div v-for="(item, index) in portfolio.images" :key="index" class="col-12 col-md-6 col-lg-4 mb-4">
        <GridGallery :index="index" :name="item.name" :img="item.img" :project="item.project" :languages="item.languages" :client="item.client" :preview="item.preview"/>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import AllData from '@/services/GetData.js';
import SectionTitle from '@/components/Global/SectionTitle.vue';
import GridGallery from '@/components/Portfolio/GridGallery.vue';
import TestSpinner from '@/components/TestSpinner.vue';

  export default {
    name: 'portfolio',
    components: {
      SectionTitle,
      GridGallery,
      TestSpinner,
    },
    data() {
      return {
        portfolio: []
      }
    },
    created () {
      AllData.getPortfolio()
      .then(response => {
        this.portfolio = response.data
      })
      .catch(error => {
        console.log( `There was an error: ${error.response}`);
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>