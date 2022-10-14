<template>
<div>
  <h1 class="text-color text-capitalize m-0">{{ title }}</h1>
</div>
</template>

<script>
  export default {
    name: 'post-title',
    props: {
      title: {
        type: String,
      },
    },
  }
</script>

<style lang="scss" scoped>
h1 {
  line-height: 1.3em;
  font-weight: 600;
}
</style>