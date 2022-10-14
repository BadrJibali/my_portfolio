<template>
<section>
  <SectionTitle class="mb-2 mb-lg-4 mb-lg-5" first="about" second="me" backWord="resume"/>
  <div class="container">
    <div class="row w-85 mx-auto justify-content-between">
      <div class="col-12 col-md-12 col-lg-5 mb-5">
        <Title class="mt-2 mb-4 pt-2 pb-1" :title="titleSections.personal"/>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 d-flex flex-column gap-4">
            <PersonalInfo class="fs-7" :address="address.firstName" :enterWord="about.personalInfo.firstName"/>
            <PersonalInfo class="fs-7" :address="address.lastName" :enterWord="about.personalInfo.lastName"/>
            <PersonalInfo class="fs-7" :address="address.age" :enterWord="about.personalInfo.age"/>
            <PersonalInfo class="fs-7" :address="address.nationality" :enterWord="about.personalInfo.nationality"/>
            <PersonalInfo class="fs-7" :address="address.freelance" :enterWord="about.personalInfo.freelance"/>
            <PersonalInfo class="fs-7" :address="address.country" :enterWord="about.personalInfo.country"/>
          </div>
          <div class="col-12 col-md-6 col-lg-6 d-flex flex-column mt-4 mt-md-0 mt-lg-0 gap-4">
            <PersonalInfo class="fs-7" :address="address.governorate" :enterWord="about.personalInfo.governorate"/>
            <PersonalInfo class="fs-7" :address="address.phone" :enterWord="about.personalInfo.phone"/>
            <PersonalInfo class="fs-7" :address="address.whatsapp" :enterWord="about.personalInfo.whatsapp"/>
            <PersonalInfo class="fs-7" :address="address.email" :enterWord="about.personalInfo.email"/>
            <PersonalInfo class="fs-7" :address="address.facebook" :enterWord="about.personalInfo.facebook"/>
            <PersonalInfo class="fs-7" :address="address.languages"  :enterWord="about.personalInfo.languages[0]" :secondWord="about.personalInfo.languages[1]"/>
          </div>
          <div class="mt-5 pt-1">
            <Button class="mx-auto mx-md-auto mx-lg-0" :path="button.path" :icon="button.icon">downlad cv</Button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-6">
        <div class="row justify-content-center">
            <PersonalBox class="col-12 col-md-6 col-lg-6 px-0 p-lg-2" :title="experience.years" :total="about.reviews.years"/>
            <PersonalBox class="col-12 col-md-6 col-lg-6 px-0 p-lg-2" :title="experience.projects" :total="about.reviews.projects"/>
            <PersonalBox class="col-12 col-md-6 col-lg-6 px-0 p-lg-2" :title="experience.happyCustomers" :total="about.reviews.happyCustomers"/>
            <PersonalBox class="col-12 col-md-6 col-lg-6 px-0 p-lg-2" :title="experience.awards" :total="about.reviews.awards"/>
        </div>
      </div>
    </div>
    <hr class="w-50 mb-2 mx-auto">
    <div class="row w-85 mx-auto justify-content-center align-items-center">
      <Title class="w-100 text-center mt-5 mb-4 pb-1" :title="titleSections.skills"/>
        <ProgressCircle class="mb-3 mb-lg-5 col-12 col-md-4 col-lg-3" v-for="(skill, index) in about.skills" :key="index" :percent="skill.percent" :lang="skill.lang"/>
    </div>
    <hr class="w-50 mb-2 mx-auto">
    <div class="row w-85 mx-auto mb-5">
      <Title class="w-100 text-center mt-5 mb-5 pb-1" :title="titleSections.experience"/>
      <ExperienceInfo class="mb-4 col-12 col-md-6 col-lg-6" v-for="(exp, index) in about.experience" :key="index" :from="exp.date.from" :to="exp.date.to" :job="exp.job" :place="exp.place" :description="exp.description"/>
    </div>
  </div>
</section>
</template>

<script>
import AllData from '@/services/GetData.js';
import SectionTitle from '@/components/Global/SectionTitle.vue';
import PersonalInfo from '@/components/About/PersonalInfo.vue';
import Title from '@/components/Global/Title.vue';
import PersonalBox from '@/components/About/PersonalBox.vue';
import Button from '@/components/Global/Button.vue';
import ProgressCircle from '@/components/About/ProgressCircle.vue';
import ExperienceInfo from '@/components/About/ExperienceInfo.vue';

  export default {
    name: 'about',
    components: {
      SectionTitle,
      PersonalInfo,
      Title,
      PersonalBox,
      Button,
      ProgressCircle,
      ExperienceInfo,
    },
    data() {
      return {
        titleSections: {
          personal: 'personal infos',
          skills: 'my skills',
          experience: 'experience & education',
        },

        address: {
          firstName: 'first name',
          lastName: 'last name',
          age: 'age',
          nationality: 'nationality',
          freelance: 'freelance',
          country: 'country',
          governorate: 'governorate',
          phone: 'phone',
          email: 'email',
          facebook: 'facebook',
          whatsapp: 'whatsapp',
          languages: 'languages',
        },

        experience: {
          years: 'years of experience',
          happyCustomers: 'happy customers',
          projects: 'completed projects',
          awards: 'awards won'
        },

        button: {
          path: 'about',
          icon: 'download'
        },

        about: {}
      }
    },
    created () {
      AllData.getAbout()
      .then(response => {
        this.about = response.data
      })
      .catch(error => {
        console.log( `There was an error: ${error.response}`);
      })
    },
  }
</script>

<style lang="scss" scoped>
section {
  font-family: 'Poppins', sans-serif;
}
</style>
