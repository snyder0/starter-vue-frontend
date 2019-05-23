export const props = {
    title: {
      type: String,
      default: ''
    },
    closeButtonLabel: {
      type: String,
      default: 'cancel'
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    buttons: {
      type: Array,
      default: () => []
    },
    show: {
      type: Boolean,
      default: false
    }
  }