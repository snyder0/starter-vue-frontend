<template>
  <v-flex>
    <v-radio-group>
      <v-radio
        v-for="(item, index) in items"
        :key="index"
        :label="item.label"
        :color="item.color"
        :value="item.value"
        :ripple="item.ripple"
        :disabled="item.disabled"
        :required="item.required"
        @change="value => $emit('updateValue', value)"
      />
    </v-radio-group>
  </v-flex>
</template>

<script lang="ts">
export default {
  name: "BpRadio",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
    },
    value: {
        type: [Boolean, String],
        default: '',
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