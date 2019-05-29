<template>
  <v-flex>
    <v-switch
      :label="label"
      :color="color"
      :ripple="ripple"
      :value="value"
      :true-value="trueValue"
      :false-value="falseValue"
      :disabled="disabled"
      :required="required"
    />
  </v-flex>
</template>

<script lang='ts'>
export default {
  name: "RalSwitch",
  props: {
    label: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "prinary",
    },
    value: {
        type: [Boolean, String],
        default: '',
    },
    trueValue: {
        type: [Boolean, String],
        default: true,
    },
    falseValue: {
        type: [Boolean, String],
        default: false,
    },
    ripple: {
        type: Boolean,
        default: true,
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