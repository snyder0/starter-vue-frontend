<template>
  <div>
    <v-card-text>
      <v-form ref="registerForm">
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
        Register
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'RegisterForm',
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
        this.$refs.registerForm.reset()
      },
    }
  }
</script>