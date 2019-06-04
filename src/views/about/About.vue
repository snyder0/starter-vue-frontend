<template>
  <div
    v-if="isVisible"
  >
    This is the about page
    <v-btn @Click="onClose">
      Hide
    </v-btn>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'About',
    props: {
      isVisible: {
        type: Boolean
      }
    }
  }
</script>