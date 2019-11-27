<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          type="email"
          id="email"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is already exist</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          type="password"
          id="password"
          @blur="$v.password.$touch()"
          v-model="password"
        >
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password is {{$v.password.$params.minLength.min}}. Now it is {{password.length}}
        </div>
      </div>
      <div class="form-group">
        <label for="confirm">Confirm Password</label>
        <input
          class="form-control"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          type="password"
          id="confirm"
          @blur="$v.confirmPassword.$touch()"
          v-model="confirmPassword"
        >
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
          Passwords should match
        </div>
      </div>

      <button
        class="btn btn-success"
        type="submit"
        :disabled="$v.$invalid"
      >Submit
      </button>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('Email', this.email)
      console.log('Password', this.password)
    }
  },
  validations: {
    email: {
      required,
      email,
      uniqEmail: function (newEmail) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (newEmail === '') return true
            const value = newEmail !== 'test@mail.ru'
            resolve(value)
          }, 1000)
        })
      }
    },
    password: {
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs((vue) => {
        return vue.password
      })
    }
  }
}
</script>

<style></style>
