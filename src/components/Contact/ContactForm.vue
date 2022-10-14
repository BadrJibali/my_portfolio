<template>
<div class="mb-5">
  <form @submit.prevent="onPost">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-4 mb-4">
        <input :class="{ error: $v.name.$error }" class="form-control py-2 back-color text-color border-0 rounded-pill col-12 col-md-4 col-lg-4 text-capitalize" placeholder="YOUR NAME" v-model.trim="name" type="text" @blur="$v.name.$touch()">
        <div class="" v-if="$v.name.$error">
          <p class="m-0 fs-7 error-text" v-if="!$v.name.required">Name is required.</p>
          <p class="m-0 fs-7 error-text" v-if="!$v.name.minLength">Your name is to short, it must be {{$v.name.$params.minLength.min}} letters.</p>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4 mb-4">
        <input :class="{ error: $v.email.$error}" class="form-control py-2 back-color text-color border-0 rounded-pill col-12 col-md-4 col-lg-4" placeholder="YOUR EMAIL" v-model.trim="email" type="email" @blur="$v.email.$touch()">
        <div class="" v-if="$v.email.$error">
          <p class="m-0 fs-7 error-text" v-if="!$v.email.required">Email is required.</p>
          <p class="m-0 fs-7 error-text" v-if="!$v.email.email">Please enter a valid email.</p>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4 mb-4">
        <input :class="{ error: $v.subject.$error}" class="form-control py-2 back-color text-color border-0 rounded-pill col-12 col-md-4 col-lg-4" placeholder="YOUR SUBJECT" v-model.trim="subject" type="text" @blur="$v.subject.$touch()">
        <div class="" v-if="$v.subject.$error">
          <p class="m-0 fs-7 error-text" v-if="!$v.subject.required">Subject is required.</p>
        </div>
      </div>
      <div class="col-12 mb-4">
        <textarea :class="{ error: $v.message.$error}" class="form-control py-2 height-area back-color text-color border-0 rounded-5 col-12" placeholder="YOUR MESSAGE" v-model.trim="message" @blur="$v.message.$touch()"></textarea>
        <div class="" v-if="$v.message.$error && message !== null">
          <p class="m-0 fs-7 error-text" v-if="!$v.message.required">Message is required.</p>
        </div>
      </div>
    </div>

    <Button :disabled="$v.$invalid" type="submit" icon="paper-plane">send message</Button>

      <p class="m-0 mt-2 fs-7 susses-text" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <p class="m-0 fs-7 error-text" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <p class="m-0 fs-7 error-text" v-if="submitStatus === 'PENDING'">Sending...</p>
  </form>
</div>
</template>

<script>
import PostData from '@/services/PostData.js';
import Button from '@/components/Global/Button.vue';
import { required, minLength, email } from 'vuelidate/lib/validators'

  export default {
    name: 'contact-form',
    components: {
      Button,
    },
    data() {
      return {
        name: null,
        email: null,
        subject: null,
        message: null,
        submitStatus: null
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      subject: {
        required
      },
      message: {
        required
      },
    },
    methods: {
      resetData() {
        this.name= null,
        this.email= null,
        this.subject= null,
        this.message= null
      },
      onPost() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          PostData.postContact({name: this.name, email: this.email, subject: this.subject, message: this.message})
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
        }, 2000)
        }
        this.$v.$reset();
        this.resetData();
      }
    }
  }
</script>

<style lang="scss" scoped>
.back-color {
  background: var(--stroke-color);
  padding: 0.75em 1.5em !important;
  transition: var(--main-transition);
}

.form-control:focus {
  color: var(--alt-main-color);
  background: var(--alt-main-color-trans);
  border-color: #86b7fe;
  border: 0.1em solid var(--alt-main-color-hover);
  outline: 0;
  box-shadow:0 0 0 0.1rem var(--alt-main-color);
}

.height-area {
  height: 12.1em;
}

.error {
  box-shadow:0 0 0 0.1rem var(--error-color);
}

.error-text {
  padding: 0.5em 1.5em 0 1.5em !important;
  color: var(--error-color);
}

.susses-text {
  color: var(--susses-color);
  padding-left: 0.5rem;
}
</style>