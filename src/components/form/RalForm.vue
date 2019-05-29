<template>
  <v-container>
    <v-form>
      <v-layout 
        row 
        wrap
      >
        <v-flex
          v-for="field in fields"
          ref="form"
          :key="field.key"
          :class="getFieldLayout(field)"
          class="ral-form-inputs"
        >
          <ral-text-field 
            v-if="ralTextFieldTypes.includes(field.type)"
            :id="field.key"
            :ref="field.key"
            :key="field.key"
            :label="field.label"
            :hint="field.hint"
            :value="value"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :clearable="clearable"
            :disabled="disabled"
            :required="required"
          />

          <ral-text-area 
            v-else-if="ralTextAreaTypes.includes(field.type)"
            :id="field.key"
            :ref="field.key"
            :key="field.key"
            :label="field.label"
            :hint="field.hint"
            :value="value"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :clearable="clearable"
            :disabled="disabled"
            :required="required"
          />

          <ral-select-list 
            v-else-if="ralSelectListTypes.includes(field.type)"
            :id="field.key"
            :ref="field.key"
            :key="field.key"
            :label="field.label"
            :value="value"
            :items="field.items"
            :hint="field.hint"
            :placeholder="placeholder"
            :multiple="field.multiple"
            :disabled="disabled"
            :required="required"
          />

          <!-- <ral-switch
            v-else-if="ralSwitchTypes.includes(field.type)"
            :label="label"
            :color="color"
            :ripple="ripple"
            :value="value"
            :true-value="trueValue"
            :false-value="falseValue"
            :disabled="disabled"
            :required="required"
          /> -->

          <div v-else>
            Unsupported field type: {{ field.type }}
          </div>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import { Fields } from '@/lib/types/field.ts'
import { props } from './props.ts'

export default {
  name: 'RalForm',
  components: {
    RalTextField: () => import('@/components/formFields/RalTextField.vue'),
    RalTextArea: () => import('@/components/formFields/RalTextArea.vue'),
    RalSelectList: () => import('@/components/formFields/RalSelectList.vue'),
    //RalSwitch: () => import('@/components/selectionControls/RalSwitch')
  },
  props: props,
  data () {
    return {
      ralTextFieldTypes: [
        Fields.TEXT
      ],
      ralTextAreaTypes: [
        Fields.TEXTAREA
      ],
      ralSelectListTypes: [
        Fields.SELECTLIST
      ],
      ralSwitchTypes: [
        Fields.SWITCH
      ]
    }
  },
  methods: {
    getFieldLayout (field) {
      return field.layout
    }
  }
}
</script>

<style>
  .ral-form-inputs {
    padding: 0 .5rem;
  }
</style>