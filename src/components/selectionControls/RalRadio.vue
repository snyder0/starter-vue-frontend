<template>
  <v-flex>
    <v-radio
      :label="label"
      :color="color"
      :value="value"
      :ripple="ripple"
      :disabled="disabled"
      :required="required"
    />
  </v-flex>
</template>

<script lang='ts'>
export default {
  name: "RalRadio",
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