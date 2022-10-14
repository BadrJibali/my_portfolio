<template>
<div class="d-flex fs-8 flex-column flex-md-row flex-lg-row flex-xl-row gap-2 gap-md-4 gap-lg-4 gap-xl-4">
  <div class="">
    <font-awesome-icon v-if="blogger" class="m-0 me-2 alt-main-color" icon="user" />
    <span class="text-color text-capitalize">{{ blogger }}</span>
  </div>
  <div class="">
    <font-awesome-icon v-if="date" class="m-0 me-2 alt-main-color" icon="calendar-days" />
    <span class="text-color text-capitalize">{{ date }}</span>
  </div>
  <div class="">
    <font-awesome-icon v-if="date" class="m-0 me-2 alt-main-color" icon="tags" />
    <span v-for="(tag, index) in tags" :key="index" class="text-color">{{`${((index) >= (tags.length - 1) ? `${tag}.` : `${tag}, ${' '}`)}`}}</span>
  </div>
</div>
</template>

<script>
  export default {
    name: 'post-information',
    props: {
      blogger: {
        type: String,
      },
        date: {
          type: [String, Number],
        },
      tags: {
        type: [ String, Array, Object],
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>