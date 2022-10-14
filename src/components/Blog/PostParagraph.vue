<template>
<div>
  <P class="text-color">{{ paragraph | capitalize() }}.</P>
</div>
</template>

<script>
  export default {
    name: 'post-paragraph',
    props: {
      paragraph: {
        type: String,
        default: 'oops Data Loading'
      },
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<style lang="scss" scoped>
p {
  font-size: 0.95em;
  line-height: 1.7em;
}
</style>