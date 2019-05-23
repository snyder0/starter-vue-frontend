<template>
  <v-flex>
    <v-select
      ref="selectList"
      v-model="e6"
      :menu-props="{ maxHeight: '400' }"
      :label="label"
      :items="items"
      :multiple="multiple"
      :hint="hint"
      :placeholder="placeholder"
      persistent-hint
    />
  </v-flex>
</template>

<script>
export default {
  name: 'RalSelectList',
  props: {
    label: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    hint: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    multiple: {
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
    }
},
  data () {
    return {
      e6: []
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