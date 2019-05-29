<template>
  <v-flex>
    <v-checkbox
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
  name: "RalCheckbox",
  props: {
    label: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "secondary",
    },
    value: {
        type: [Boolean, String],
        default: '',
    },
    trueValue: {
        type: [Boolean, String],
        default: '',
    },
    falseValue: {
        type: [Boolean, String],
        default: '',
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