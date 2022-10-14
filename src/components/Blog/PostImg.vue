<template>
<div class="overflow-hidden">
  <img class="img-fluid rounded-4" :src="require(`@/${img}`)" alt="">
</div>
</template>

<script>
  export default {
    name: 'post-image',
    props: {
      img: {
        type: [ String, Number ],
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>