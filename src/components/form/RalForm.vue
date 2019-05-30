/* eslint-disable */
<template>
  <v-layout 
    row 
    wrap
  >
    <v-flex
      v-for="field in fields"
      :key="field.key"
      :class="getFieldLayout(field)"
      class="ral-form-inputs"
    >
      <v-form ref="RalForm">
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
          :prepend-icon="field.prependIcon"
          :append-icon="field.appendIcon"
          @updateValue="value => updateValue(field.key, value)"
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
          :prepend-icon="field.prependIcon"
          :append-icon="field.appendIcon"
          @updateValue="value => updateValue(field.key, value)"
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
          @updateValue="value => updateValue(field.key, value)"
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
      </v-form>
    </v-flex>
  </v-layout>
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
  updated () {

  },
  mounted () {

  },
  updated () {

  },
  methods: {
    getFieldLayout (field) {
      return field.layout
    },
    updateValue (key, value) {
      let updatedKey = key
      let updatedValue = value
      for (let i=0; i < this.fields.length; i++) {
        let fieldData = this.fields[i]
        if (fieldData.key === updatedKey) {
          fieldData.value = updatedValue
        }
      }
    }
  }
}
</script>

<style>
  .ral-form-inputs {
    padding: 0 .5rem;
  }
</style>