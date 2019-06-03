<template>
  <v-flex>
    <v-text-field
      ref="textField"
      :label="label"
      :hint="hint"
      :value="value"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :clearable="clearable"
      :disabled="disabled"
      :required="required"
      :prepend-icon="prependIcon"
      :append-icon="appendIcon"
      :type="type"
      @input="value => $emit('updateValue', value)"
    />
  </v-flex>
</template>

<script lang="ts">
export default {
  name: 'BpTextField',
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
    prependIcon: {
      type: String,
      default: ''
    },
    appendIcon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>