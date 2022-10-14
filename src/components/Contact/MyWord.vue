<template>
<div>
  <div class="text-color mb-4">
    <h3 class="text-uppercase mb-3 fw-bold">{{ header }}</h3>
    <p class="m-0 fs-6 fw-normal w-85">{{ paragraph }}.</p>
  </div>
  <div class="mb-4 pb-1 d-flex flex-column gap-3">
    <ContactInfo address="mail me" :tool="mail" iconName="square-envelope" />
    <ContactInfo address="call me" :tool="phone" iconName="square-phone" />
  </div>
  <div class="d-flex gap-4">
    <BrandSocialIcon :link="facebook" iconName="facebook-f"/>
    <BrandSocialIcon :link="whatsapp" iconName="whatsapp"/>
    <BrandSocialIcon :link="telegram" iconName="telegram"/>
    <BrandSocialIcon :link="gmail" iconName="google"/>
  </div>
</div>
</template>

<script>
import ContactInfo from '@/components/Global/ContactInfo.vue';
import BrandSocialIcon from '@/components/Global/BrandSocialIcon.vue';

  export default {
    name: 'my-word',
    components: {
      ContactInfo,
      BrandSocialIcon,
    },
    props: {
      header: {
        type: String,
        default: 'welcome friend'
      },
      paragraph: {
        type: [String, Number],
        default: 'you are welcome at any time'
      },
      mail: {
        type: [String, Number],
        default: 'badr.jibali@outlook.com'
      },
      phone: {
        type: Number,
        default: +201156260918
      },
      facebook: {
        type: [String, Number],
        default: 'facebook.com/B.M.JIBALI'
      },
      whatsapp: {
        type: Number,
        default: +201156260918
      },
      telegram: {
        type: Number,
        default: +201156260918
      },
      gmail: {
        type: [String, Number],
        default: 'badr.jibali@gmail.com'
      },
    },
    
  }
</script>

<style lang="scss" scoped>

</style>