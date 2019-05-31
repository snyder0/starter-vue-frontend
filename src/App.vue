<template>
  <v-app>
    <!-- TOOLBAR COMPONENT -->
    <ral-header />

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

<script type="ts">
import RalHeader from '@/components/header/RalHeader.vue'
import RalDialog from '@/components/dialog/RalDialog.vue'
import RalForm from '@/components/form/RalForm.vue'
import testFields from '@/lib/testProps.ts'
import { ServiceFactory } from '@/services/serviceFactory'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    RalHeader,
    RalDialog,
    RalForm,
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