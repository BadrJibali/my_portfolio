<template>
<div class="">
  <div class="d-flex align-items-center gap-2">
    <div class="">
      <font-awesome-icon class="alt-main-color fs-1" :icon="iconName"/>
    </div>
    <div class="d-flex flex-column fs-7">
      <h6 class="text-color m-0 text-uppercase">{{ address }}</h6>
      <p class="text-color m-0 fw-bold">{{ typeof(tool) === "number" ? `+${tool}` : tool }}</p>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'contact-info',
    props: {
      iconName: {
        type: String,
        default: 'code' 
      },
      address: {
        type: [String, Number],
        default: 'contact me'
      },
      tool: {
        type: [String, Number],
        default: ''
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>