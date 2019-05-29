<template>
  <v-layout
    align-center
    justify-center
    row
  >
    <v-flex
      xs12
      sm8
      md4
    >
      <v-card
        flat
      >
        <v-toolbar
          dark
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
          <v-form>
            <v-text-field
              prepend-icon="person"
              name="login"
              label="Login"
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
          <v-form>
            <v-text-field
              prepend-icon="person"
              name="first"
              label="test"
              type="text" 
            />
            <v-text-field
              prepend-icon="person"
              name="login"
              label="test"
              type="text" 
            />
            <v-text-field
              prepend-icon="person"
              name="login"
              label="test"
              type="text" 
            />
            <v-text-field
              id="password"
              prepend-icon="lock"
              name="password"
              label="test2"
              type="password" 
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            flat
            color="error"
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
      }
    }
  }
</script>