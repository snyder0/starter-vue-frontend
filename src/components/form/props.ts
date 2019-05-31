export const props = {
    fields: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => {}
    },
    label: {
      type: String,
      default: ''
    },
    landscape: {
      type: Boolean,
      default: false
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
    color: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    value: {
      type: null
    }
  }