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
      >
        <v-toolbar
          flat
        >
          <v-toolbar-title>{{ loginForm ? "Login" : "Register" }}</v-toolbar-title>
          <v-spacer />
          <div v-if="loginForm">
            or 
            <a @click="switchForms">Create an account</a>
          </div>
          <div v-else>
            or
            <a @click="switchForms">Login</a>
          </div>
        </v-toolbar>
        <v-card-text v-if="loginForm">
          <v-form ref="form">
            <v-text-field
              autofocus
              prepend-icon="email"
              name="email"
              label="Email"
              type="text" 
            />
            <v-text-field
              id="password"
              
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password" 
            />
          </v-form>
        </v-card-text>
        <v-card-text v-else>
          <v-form ref="form">
            <v-text-field
              prepend-icon="person"
              name="firstname"
              label="First Name"
              type="text" 
            />
            <v-text-field
              prepend-icon="person"
              name="lastname"
              label="Last Name"
              type="text" 
            />
            <v-text-field
              prepend-icon="email"
              name="email"
              label="Email"
              type="text" 
            />
            <v-text-field
              id="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password" 
            />
          </v-form>
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
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang='ts'>
  export default {
    name: 'Login',
    components: {
      
    },
    data() {
      return {
        loginForm: true,
        registerForm: false
      }
    },
    computed: {

    },
    methods: {
      switchForms () {
        if (this.loginForm) {
          this.loginForm = !this.loginForm
          this.registerForm = !this.registerForm
        } else {
          this.loginForm = !this.loginForm
          this.registerForm = !this.registerForm
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    }
  }
</script>