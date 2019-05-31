<template>
  <div>
    <v-card-text>
      <bp-form
        ref="registerForm"
        :fields="registerFormFields"
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
      <v-btn color="primary">
        Register
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script lang='ts'>
import BpForm from '@/components/form/BpForm.vue'
import registerFormFields from '../loginFormConfig/registerFormFields'

  export default {
    name: 'RegisterForm',
    components: {
      BpForm
    },
    data() {
      return {
        registerFormFields: registerFormFields
      }
    },
    methods: {
      reset () {
        this.$refs.registerForm.reset()
      },
    }
  }
</script>