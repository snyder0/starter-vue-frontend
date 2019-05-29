<template>
  <v-flex>
    <v-textarea
      ref="textArea"
      :label="label"
      :hint="hint"
      :value="value"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :clearable="clearable"
      :disabled="disabled"
      :required="required"
      @input="value => $emit('input', value)"
      @change="value => $emit('input', value)"
    />
  </v-flex>
</template>
<script lang='ts'>
export default {
  name: 'RalTextArea',
  props: {
    label: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Boolean, String],
      default: ''
    },
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style>
</style>