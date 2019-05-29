<template>
  <v-container fluid>
    <v-layout
      align-start
      justify-end
    >
      <v-btn
        color="primary"
        @click="addOrganization"
      >
        Create
        <v-icon>add</v-icon>
      </v-btn>
    </v-layout>
    <v-layout
      align-center
      justify-center
      row
    >
      <v-flex
        s12
      >
        <div class="oragnizations">
          <v-card>
            <v-toolbar
              dark
            >
              <v-toolbar-title class="text-xs-center">
                Oragnizations
              </v-toolbar-title>

              <v-spacer />

              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
            </v-toolbar>

            <v-list subheader>
              <v-subheader />
              <v-list-tile
                v-for="item in items"
                :key="item.title"
              >
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{
                      item.title
                    }}
                  </v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon>
                    edit
                  </v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card>
        </div>

        
        <!-- FORM AND DIALOG -->
        <ral-dialog
          ref="organizationsDialog"
          v-bind="addForm.dialog.props"
          @close="addForm.dialog.props.show = false"
        >
          <div 
            slot="content"
          >
            <ral-form
              ref="organizationsForm"
              :fields="addForm.form.props.fields"
              :data="addForm.form.props.data"
            />
          </div>
        </ral-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RalDialog from '@/components/dialog/RalDialog.vue'
import RalForm from '@/components/form/RalForm.vue'
import addOrganizationsFields from '@/lib/addOrganizationsProps'

export default {
  name: "Organization",
  components: {
    RalDialog,
    RalForm,
  },
  data() {
    return {
      items: [
        {
          active: true,
          title: "Jason Oner",
        },
        {
          active: true,
          title: "Ranee Carlson",
        },
        {
          title: "Cindy Baker",
        },
        {
          title: "Ali Connors",
        }
      ],
      addForm: {
        form: {
          props: {
            fields: addOrganizationsFields,
            data: {}
          },
        },
        dialog: {
          props: {
            show: false,
            title: 'Create Organization',
            showCloseButton: true,
            closeButtonLabel: 'cancel',
            buttons: [
              {
                label: 'Create',
                data: {},
                callback: this.organizationFormSave
              }
            ]
          }
        }
      }
    }
  },
  methods: {
    addOrganization () {
      this.$set(this.addForm.form.props, 'fields', addOrganizationsFields)
      this.$set(this.addForm.form.props, 'data', {})
      this.addForm.dialog.props.show = true
    },
    async organizationFormSave (data) {
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
  }
}
</script>