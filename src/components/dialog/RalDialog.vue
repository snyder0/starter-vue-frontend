<template>
  <v-layout 
    row
    wrap
  >
    <v-flex xs12>
      <v-dialog
        v-model="show"
        width="500"
        persistent
      >
        <v-card>
          <v-card-title> {{ title }} </v-card-title>
          <slot name="content" />
          <v-card-actions>
            <v-btn
              v-for="button in buttons"
              :key="button.label"
              small
              @click.native="click(button)"
            >
              {{ button.label }}
            </v-btn>
            <v-btn
              v-if="showCloseButton"
              small
              @click.native="closeDialog()"
            >
              {{ closeButtonLabel }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>

<script>
import { props } from './props.ts'

export default {
  name: 'Dialog',
  components: {

  },
  props: props,
  data () {
    return {
        
    }
  },
  computed: {
  },
  methods: {
    async click (button) {
      const response = await button.callback(button.data)

      if (response.close) {
        this.closeDialog()
      }
    },
    closeDialog () {
      this.$emit('close')
    }
  }
}
</script>

<style>
</style>