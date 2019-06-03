<template>
  <v-form ref="form">
    <v-layout 
      row 
      wrap
    >
      <v-flex
        v-for="field in fields"
        :key="field.key"
        :class="getFieldLayout(field)"
        class="bp-form-inputs"
      >
        <bp-text-field 
          v-if="bpTextFieldTypes.includes(field.type)"
          :id="field.key"
          :ref="field.key"
          :key="field.key"
          :label="field.label"
          :hint="field.hint"
          :value="value"
          :type="field.type"
          :placeholder="field.placeholder"
          :autofocus="field.autofocus"
          :clearable="field.clearable"
          :disabled="field.disabled"
          :required="field.required"
          :prepend-icon="field.prependIcon"
          :append-icon="field.appendIcon"
          :color="field.color"
          @updateValue="value => updateValue(field.key, value)"
        />

        <bp-text-area 
          v-else-if="bpTextAreaTypes.includes(field.type)"
          :id="field.key"
          :ref="field.key"
          :key="field.key"
          :label="field.label"
          :hint="field.hint"
          :value="value"
          :placeholder="field.placeholder"
          :autofocus="field.autofocus"
          :clearable="field.clearable"
          :disabled="field.disabled"
          :required="field.required"
          :prepend-icon="field.prependIcon"
          :append-icon="field.appendIcon"
          :color="field.color"
          @updateValue="value => updateValue(field.key, value)"
        />

        <bp-select-list 
          v-else-if="bpSelectListTypes.includes(field.type)"
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

        <bp-toggle
          v-else-if="bpToggleTypes.includes(field.type)"
          :label="field.label"
          :color="field.color"
          :ripple="field.ripple"
          :value="value"
          :true-value="field.trueValue"
          :false-value="field.falseValue"
          :disabled="field.disabled"
          :required="field.required"
          @updateValue="value => updateValue(field.key, value)"
        />

        <bp-date-picker
          v-else-if="bpDatePicker.includes(field.type)"
          :landscape="field.landscape"
          :reactive="field.reactive"
          :color="field.color"
          :event-color="field.eventColor"
          :first-day-of-week="field.firstDayOfWeek"
          :value="value"
          :year-icon="field.yearIcon"
          :width="field.width"
          :show-current="field.showCurrent"
          :disabled="field.disabled"
          :full-width="field.fullWidth"
          @updateValue="value => updateValue(field.key, value)"
        />

        <bp-time-picker
          v-else-if="bpTimePicker.includes(field.type)"
          :landscape="field.landscape"
          :color="field.color"
          :allowed-hours="field.allowedHours"
          :allowed-minutes="field.allowedMinutes"
          :event-color="field.eventColor"
          :use-seconds="field.useSeconds"
          :value="value"
          :width="field.width"
          :disabled="field.disabled"
          :full-width="field.fullWidth"
          @updateValue="value => updateValue(field.key, value)"
        />

        <bp-radio
          v-else-if="bpRadioTypes.includes(field.type)"
          :label="field.label"
          :color="field.color"
          :value="value"
          :ripple="field.ripple"
          :disabled="field.disabled"
          :required="field.required"
          :items="field.items"
          @updateValue="value => updateValue(field.key, value)"
        />

        <div v-else>
          Unsupported field type: {{ field.type }}
        </div>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script lang="ts">
import { Fields } from '@/lib/types/field.ts'
import { props } from './props'
import BpTimePickerVue from '../formFields/BpTimePicker.vue'

export default {
  name: 'BpForm',
  components: {
    BpTextField: () => import('@/components/formFields/BpTextField.vue'),
    BpTextArea: () => import('@/components/formFields/BpTextArea.vue'),
    BpSelectList: () => import('@/components/formFields/BpSelectList.vue'),
    BpToggle: () => import('@/components/formFields/BpToggle.vue'),
    BpDatePicker: () => import('@/components/formFields/BpDatePicker.vue'),
    BpTimePicker: () => import('@/components/formFields/BpTimePicker.vue'),
    BpRadio: () => import('@/components/formFields/BpRadio.vue')
  },
  props: props,
  data () {
    return {
      bpTextFieldTypes: [
        Fields.TEXT,
        Fields.PASSWORD
      ],
      bpTextAreaTypes: [
        Fields.TEXTAREA
      ],
      bpSelectListTypes: [
        Fields.SELECTLIST
      ],
      bpToggleTypes: [
        Fields.TOGGLE
      ],
      bpDatePicker: [
        Fields.DATE
      ],
      bpTimePicker: [
        Fields.TIME
      ],
      bpRadioTypes: [
        Fields.RADIO
      ]
    }
  },
  methods: {
    reset () {
      this.$refs.form.reset()
    },
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
  .bp-form-inputs {
    padding: 0 .5rem;
  }
</style>