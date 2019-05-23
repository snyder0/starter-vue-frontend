<template>
  <div class="organization">
    Hey
  </div>
</template>

<script lang='ts'>
import RalTextField from '@/components/formFields/RalTextField.vue'
import RalTextArea from '@/components/formFields/RalTextArea.vue'
import RalSelectList from '@/components/formFields/RalSelectList.vue'

export default {
  name: 'Organization',
  components: {
    RalTextField,
    RalTextArea,
    RalSelectList,
  },
  data() {
    return {
       items: [
      {
        text: 'Option 1',
        value: 1
      },
      {
        text: 'Option 2',
        value: 2
      }
    ]
    }
   
  }
}
</script>
