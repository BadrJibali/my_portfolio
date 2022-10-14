<template>
<div>
  <SectionTitle class="mb-2 bv mb-lg-4 mb-lg-5" first="my" second="blog" backWord="posts"/>
  <div class="container">
    <div class="row g-4 w-85 my-5 mx-auto">
      <div v-for="(blog, index) in displayedRecords" :key="index" class="col-12 col-md-6 col-lg-4">
        <BlogCard :id="blog.id" :img="blog.img" :title="blog.title" :paragraphs="blog.paragraphs[0].paragraph" class="mb-4" />
      </div>
      <Pagination class="mt-4" :options="options" :records="blogs.length" v-model="page" :per-page="perPage" @paginate="callback"/>
    </div>
  </div>
</div>
</template>

<script>
import AllData from '@/services/GetData.js';
import SectionTitle from '@/components/Global/SectionTitle.vue';
import BlogCard from '@/components/Blog/BlogCard.vue';
import Pagination from 'vue-pagination-2';


  export default {
    name: 'blogs',
    components: {
      SectionTitle,
      BlogCard,
      Pagination
    },

    data() {
      return {
        page: 1,
        perPage: 6,
        options: {
          edgeNavigation: true,
          texts: {
            count : ""
          }
        },
        blogs: []
      }
    },

    computed: {
      displayedRecords() {
        const startIndex = this.perPage * (this.page - 1);
        const endIndex = startIndex + this.perPage;
        return this.blogs.slice(startIndex, endIndex);
      }
    },

    created () {
      AllData.getBlogs()
      .then(response => {
        this.blogs = response.data
      })
      .catch(error => {
        console.log( `There was an error: ${error.response}`);
      })
    },
  }
</script>

<style lang="scss">
.pagination {
  text-align: center !important;
  justify-content: center !important;
  gap: 1em;
  height: fit-content;

  .page-item {
    position: relative;
  }

  .page-link {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    background-color: var(--shape-background-color);
    border: none;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
      background-color: var(--alt-main-color);
    }
  }

  .page-item:first-child .page-link,
  .page-item:last-child .page-link {
    display: none;
  }

  .active>.page-link, .page-link.active {
    color: var(--background-color);
    background-color: var(--alt-main-color);
    border: none;
  }

  .VuePagination__count  {
    text-align: center !important;
  }

}
</style>