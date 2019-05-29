<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md4
      >
        <v-card class="elevation-12">
          <v-toolbar
            dark
          >
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer />
            <div>
              or 
              <a href="">create an account</a>
            </div>
          </v-toolbar>
          <v-card-text>
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
  </v-container>
</template>

<script lang='ts'>
  export default {
    name: 'Login',
    components: {
      
    }
  }
</script>