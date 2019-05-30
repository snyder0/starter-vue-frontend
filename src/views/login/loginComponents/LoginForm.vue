<template>
  <div>
    <v-card-text>
      <ral-form
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
        @click="testSubmit"
      >
        Login
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script lang='ts'>
import RalForm from '@/components/form/RalForm.vue'
import loginFormFields from '../loginFormConfig/loginFormFields'

  export default {
    name: 'LoginForm',
    components: {
      RalForm
    },
    data() {
      return {
        loginFormFields: loginFormFields
      }
    },
    methods: {
      reset () {
        this.$refs.loginForm.reset()
      },
      testSubmit () {
        debugger
      }
    }
  }
</script>

<style lang="scss">
    .v-icon {
        color: $primary !important
    }
</style>