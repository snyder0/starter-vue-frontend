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
    />
  </v-flex>
</template>

<script lang='ts'>
export default {
  name: "RalTimePicker",
  props: {
    allowedHours: {
        type: Function,
        default: null,
    },
    allowedMinutes: {
        type: Function,
        default: null,
    },
    useSeconds: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
        default: "secondary",
    },
    eventColor: {
        type: [Array, Function, Object, String],
        default: '',
    },
    value: {
        type: [Boolean, String],
        default: '',
    },
    width: {
        type: [Number, String],
        default: 290,
    },
    fullWidth: {
        type: Boolean,
        default: false,
    },
    diabled: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style>
</style>