<template>
  <div class="home">
    This is a test
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Home,
  },
})
export default class Home extends Vue {}
</script>
