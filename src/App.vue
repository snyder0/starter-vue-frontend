<template>
  <v-app>
    <!-- TOOLBAR COMPONENT -->
    <bp-header />

    <!-- ROUTER VIEW COMPONENT -->
    <v-content>
      <v-container
        fluid
      >
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import BpHeader from '@/components/header/BpHeader.vue'
import BpDialog from '@/components/dialog/BpDialog.vue'
import BpForm from '@/components/form/BpForm.vue'
import { ServiceFactory } from '@/services/serviceFactory'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    BpHeader
  },
  provide () {
    return {

    }
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {

  }
}
</script>