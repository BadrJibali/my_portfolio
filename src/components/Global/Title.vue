<template>
<section>
  <h3 class="text-color fw-bold text-uppercase">{{title}}</h3>
</section>
</template>

<script>
  export default {
    name: 'title',
    props: {
      title: {
        type: String,
        default: 'Title Section'
      },
    },
  }
</script>
