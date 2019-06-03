<template>
  <v-flex>
    <v-date-picker
      :landscape="landscape"
      :reactive="reactive"
      :color="color"
      :event-color="eventColor"
      :first-day-of-week="firstDayOfWeek"
      :value="value"
      :year-icon="yearIcon"
      :width="width"
      :show-current="showCurrent"
      :disabled="disabled"
      :full-width="fullWidth"
      @change="value => $emit('updateValue', value)"
    />
  </v-flex>
</template>

<script lang="ts">
export default {
  name: "BpDatePicker",
  props: {
    landscape: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "primary",
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: '',
    },
    reactive: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Boolean, String],
      default: '',
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0,
    },
    showCurrent: {
      type: [String, Boolean],
      default: true,
    },
    yearIcon: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: 290,
    },
    fullWidth: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {

    }
  },
};
</script>