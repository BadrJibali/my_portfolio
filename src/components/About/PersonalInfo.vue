<template>
<section class="color d-flex gap-1">
  <p class="text-capitalize m-0">{{address}}</p>
  <span class="m-0">:</span>
  <p :class="enterWord.includes('@') || enterWord.includes('.') ? '' : 'text-capitalize'" class="text-color m-0">{{enterWord}}{{`${(secondWord !== '' ? ',' : '')} ${secondWord}${(thirdWord !== '' ? ',' : '')} ${thirdWord}`}}</p>
</section>
</template>

<script>
  export default {
    name: 'personal-info',
    props: {
      address: {
        type: String,
        require: true,
        default: 'Address'
      },
      enterWord: {
        type: {String, Number},
        require: true,
        default: 'Your Address'
      },
      secondWord: {
        type: {String, Number},
        require: false,
        default: ''
      },
      thirdWord: {
        type: {String, Number},
        require: false,
        default: ''
      },
    },
  }
</script>

<style lang="scss" scoped>
.color {
  color: var(--light-text-color);
}
</style>