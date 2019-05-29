<template>
  <v-app>
    <!-- TOOLBAR COMPONENT -->
    <ral-header />

    <!-- ROUTER VIEW COMPONENT -->
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>

    <!-- FORM AND DIALOG -->
    <ral-dialog
      ref="homeDialog"
      v-bind="testingForm.dialog.props"
      @close="testingForm.dialog.props.show = false"
    >
      <div 
        slot="content"
      >
        <ral-form
          ref="homeForm"
          :fields="testingForm.form.props.fields"
          :data="testingForm.form.props.data"
        />
      </div>
    </ral-dialog>
  </v-app>
</template>

<script>
import RalHeader from '@/components/header/RalHeader.vue'
import RalDialog from '@/components/dialog/RalDialog.vue'
import RalForm from '@/components/form/RalForm.vue'
import testFields from '@/lib/testProps.ts'
import { ServiceFactory } from '@/services/serviceFactory'

export default {
  name: 'App',
  components: {
    RalHeader,
    RalDialog,
    RalForm,
  },
  provide () {
    return {
      takeAction: this.takeAction
    }
  },
  data () {
    return {
      testingForm: {
        form: {
          props: {
            fields: testFields,
            data: {}
          },
        },
        dialog: {
          props: {
            show: false,
            title: 'This is my form within a dialog',
            showCloseButton: true,
            closeButtonLabel: 'cancel',
            buttons: [
              {
                label: 'Save',
                data: {},
                callback: this.testingFormSave
              }
            ]
          }
        }
      }
    }
  },
  methods: {
    takeAction () {
      // Set form fields and data from props
      this.$set(this.testingForm.form.props, 'fields', testFields)
      this.$set(this.testingForm.form.props, 'data', {})
      this.testingForm.dialog.props.show = true
    },
    async testingFormSave (data) {
      let success = false
      try {
        //const OrganizationService = ServiceFactory.get('organization')

        //const response = await OrganizationService.get()
        response = true;

        if (response) {
          success = true
        }
      } catch (e) {
        success = false
      }
      return { close: success }
    },
    async testingFormClose (data) {
      return { close: false }
    }
  }
}
</script>
