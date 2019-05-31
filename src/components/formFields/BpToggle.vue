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
      @change="value => $emit('updateValue', value)"
    />
  </v-flex>
</template>

<script lang='ts'>
export default {
  name: "BpToggle",
  props: {
    label: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
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
  }
};
</script>