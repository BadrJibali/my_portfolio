<template>
<div>
  <SectionTitle class="mb-2 bv mb-lg-4 mb-lg-5" first="my" second="blog" backWord="post"/>
  <div class="container">
    <div class="row page-width my-5 mx-auto">
      <PostInfo :blogger="blog.blogger" :date="blog.date" :tags="blog.tags" class=""/>
      <PostTitle :title="blog.title" class="my-4"/>
      <PostImg :img="blog.img" class="mb-4"/>
      <div class="pt-2">
        <PostParagraph v-for="(paragraph, id) in blog.paragraphs" :key="id" :paragraph="paragraph.paragraph" class="mb-3"/>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import AllData from '@/services/GetData.js';
import SectionTitle from '@/components/Global/SectionTitle.vue';
import PostInfo from '@/components/Blog/PostInfo.vue';
import PostTitle from '@/components/Blog/PostTitle.vue';
import PostImg from '@/components/Blog/PostImg.vue';
import PostParagraph from '@/components/Blog/PostParagraph.vue';

  export default {
    name: 'single-blog',
    components: {
      SectionTitle,
      PostInfo,
      PostTitle,
      PostImg,
      PostParagraph,
    },
    props: ['id'],

    data() {
      return {
        blog: []
      }
    },

    created () {
      AllData.getBlog(this.id)
      .then(response => {
        this.blog = response.data
      })
      .catch(error => {
        console.log( `There was an error: ${error.response}`);
      })
    },
  }
</script>

<style lang="scss" scoped>
.page-width {
  max-width: 100%;
  width: 50%;

  @media (max-width: 991.98px) {
    width: 90%;
  }
  @media (max-width: 767.98px) {
    width: 100%;
  }
  @media (max-width: 575.98px) {
    width: 100%;
  }
}
</style>