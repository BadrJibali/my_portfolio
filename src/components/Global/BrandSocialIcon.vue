<template>
<a :href="link">
  <div class="border-0 rounded-circle shape-alt-background-color position-relative m-0 w">
    <font-awesome-icon class="alt-main-color position-absolute top-50 start-50 translate-middle fs-5 t" :icon="['fab', `${iconName}`]"/>
  </div>
</a>
</template>

<script>
  export default {
    name: 'social-icon',
    props: {
      iconName: {
        type: String,
        default: 'whatsapp'
      },
      link: {
        type: [String, Number],
        default: ''
      }
    },
  }
</script>

<style lang="scss" scoped>
.w {
  width: 2.5em;
  height: 2.5em;
  transition: 0.3s ease-in-out;

  &:hover {
    background: var(--alt-main-color);
  }

  &:hover .t {
    color: var(--background-color);
  }
}
</style>