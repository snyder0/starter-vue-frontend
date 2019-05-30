<template>
  <div>
    <v-card-text>
      <ral-form
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
import RalForm from '@/components/form/RalForm.vue'
import registerFormFields from '../loginFormConfig/registerFormFields'

  export default {
    name: 'RegisterForm',
    components: {
      RalForm
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