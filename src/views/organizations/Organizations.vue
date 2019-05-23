<template>
  <v-container
    fluid
  >
    <v-layout
      align-center
      justify-center
    >
      <div
        class="oragnizations"
      >
        This is the oragnizations page
      </div>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
export default {
  name: 'Organization',
  components: {

  },
  data() {
    return {
       items: [
      {
        text: 'Option 1',
        value: 1
      },
      {
        text: 'Option 2',
        value: 2
      }
    ]
    }
   
  }
}
</script>
