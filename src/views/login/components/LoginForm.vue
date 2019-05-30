<template>
  <div>
    <v-card-text>
      <v-form ref="loginForm">
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
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'LoginForm',
    components: {
      
    },
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {
      switchForms () {

      },
      reset () {
        this.$refs.loginForm.reset()
      },
    }
  }
</script>