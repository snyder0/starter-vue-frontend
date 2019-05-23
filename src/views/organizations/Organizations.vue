<template>
  <div class="organization">
    <TextField
      label="Organization"
    />
    <TextArea label="Organization" />
    <SelectList
      label="Select Organization"
      :items="items"
    />
  </div>
</template>

<script lang='ts'>
import TextField from '@/components/form/textFields.vue'
import TextArea from '@/components/form/textArea.vue'
import SelectList from '@/components/form/selectList.vue'

export default {
  name: 'Organization',
  components: {
    TextField,
    TextArea,
    SelectList,
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
