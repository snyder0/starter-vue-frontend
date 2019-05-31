<template>
  <v-layout
    align-center
    justify-center
    row
  >
    <v-flex
      xs12
      sm8
      md8
      lg4
    >
      <v-card
        class="mt-5"
        min-width="1000"
      >
        <v-toolbar
          flat
        >
          <v-toolbar-title>{{ (currentForm.name == 'LoginForm') ? 'Login' : 'Register' }}</v-toolbar-title>
          <v-spacer />
          <div>
            or 
            <a @click="switchForms">{{ (currentForm.name == 'LoginForm') ? 'Create an account' : 'Login' }}</a>
          </div>
          <div
            v-for="form in forms"
            :key="form.name"
          />
        </v-toolbar>
        <keep-alive>
          <component :is="currentFormComponent" />
        </keep-alive>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang='ts'>
//  This is a change
import LoginForm from './loginComponents/LoginForm.vue'
import RegisterForm from './loginComponents/RegisterForm.vue'
import RegisterFormVue from './loginComponents/RegisterForm.vue';
  export default {
    name: 'Login',
    components: {
      LoginForm, RegisterForm
    },
    data() {
      return {
        currentForm: LoginForm,
        forms: [LoginForm, RegisterForm]
      }
    },
    computed: {
      currentFormComponent ():any {
        return this.currentForm
      }
    },
    methods: {
      switchForms () {
        if (this.currentForm.name == 'LoginForm') {
          this.currentForm = RegisterForm
        } else {
          this.currentForm = LoginForm
        }
      }
    }
  }
</script>