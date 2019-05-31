<template>
  <v-flex>
    <v-time-picker
      :landscape="landscape"
      :color="color"
      :allowed-hours="allowedHours"
      :allowed-minutes="allowedMinutes"
      :event-color="eventColor"
      :use-seconds="useSeconds"
      :value="value"
      :width="width"
      :disabled="disabled"
      :full-width="fullWidth"
      @change="value => $emit('updateValue', value)"
    />
  </v-flex>
</template>

<script lang='ts'>
export default {
  name: "BpTimePicker",
  props: {
    landscape: {
      type: Boolean,
      default: false
    },
    allowedHours: {
      type: Function,
      default: null
    },
    allowedMinutes: {
      type: Function,
      default: null
    },
    useSeconds: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: ''
    },
    value: {
      type: [Boolean, String],
      default: ''
    },
    width: {
      type: [Number, String],
      default: 290
    },
    fullWidth: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  }
};
</script>