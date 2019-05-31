<template>
  <div>
    <v-card-text>
      <bp-form
        ref="loginForm"
        :fields="loginFormFields"
      />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        flat
        color="error"
        @click="reset"
      >
        clear
      </v-btn>
      <v-btn
        color="primary"
        @click="submitLogin"
      >
        Login
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script lang='ts'>
import BpForm from '@/components/form/BpForm.vue'
import loginFormFields from '../loginFormConfig/loginFormFields'

  export default {
    name: 'LoginForm',
    components: {
      BpForm
    },
    data() {
      return {
        loginFormFields: loginFormFields
      }
    },
    mounted () {

    },
    methods: {
      reset () {
        this.$refs.loginForm.reset()
      },
      submitLogin () {
        // Login 
        debugger
      }
    }
  }
</script>