<template>
<section>
  <SectionTitle class="mb-2 bv mb-lg-4 mb-lg-5" first="get in" second="touch" backWord="contact"/>
  <div class="container">
    <div class="row w-85 mx-auto">
      <div class="col-12 col-md-12 col-lg-4">
        <MyWord
        :header="contact.header"
        :paragraph="contact.paragraph"
        :mail="contact.contactInfo.mail"
        :phone="contact.contactInfo.phone"
        :facebook="contact.contactInfo.facebook"
        :whatsapp="contact.contactInfo.whatsapp"
        :telegram="contact.contactInfo.telegram"
        :gmail="contact.contactInfo.gmail"
        class="mt-4"
        />
      </div>
      <div class="col-12 col-md-12 col-lg-8">
        <ContactForm class="mt-4"/>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import AllData from '@/services/GetData.js';
import SectionTitle from '@/components/Global/SectionTitle.vue';
import MyWord from '@/components/Contact/MyWord.vue';
import ContactForm from '@/components/Contact/ContactForm.vue';

  export default {
    name: 'contact',
    components: {
      SectionTitle,
      MyWord,
      ContactForm,
    },
    data() {
      return {
        // first: 'get in',
        // second: 'touch',
        // backWord: 'contact',

        contact: {}
      }
    },
    created () {
      AllData.getContact()
      .then(response => {
        this.contact = response.data
      })
      .catch(error => {
        console.log( `There was an error: ${error.response}`);
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>