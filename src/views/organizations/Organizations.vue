<template>
  <v-container fluid>
    <v-layout
      align-center
      justify-center
      row
    >
      <v-flex
        xs6
      >
        <div>
          <v-card>
            <v-toolbar
              dense
              flat
            >
              <v-toolbar-title class="text-xs-center">
                Organizations
              </v-toolbar-title>
              <v-spacer />
              <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                  flat
                  color="primary"
                  @click="addOrganization"
                >
                  Create
                  <v-icon color="primary">
                    add
                  </v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>

            <v-list subheader>
              <v-subheader />
              <template v-for="(item, index) in items">
                <v-list-tile
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
                <v-divider
                  v-if="index + 1 < items.length"
                  :key="index"
                />
              </template>
            </v-list>
          </v-card>
        </div>

        
        <!-- FORM AND DIALOG -->
        <bp-dialog
          ref="organizationsDialog"
          v-bind="addForm.dialog.props"
          @close="addForm.dialog.props.show = false"
        >
          <div 
            slot="content"
          >
            <bp-form
              ref="organizationsForm"
              :fields="addForm.form.props.fields"
              :data="addForm.form.props.data"
            />
          </div>
        </bp-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script type="ts">
import BpDialog from '@/components/dialog/BpDialog.vue'
import BpForm from '@/components/form/BpForm.vue'
import createOrganizationFields from './organizationFormConfig/createOrganizationFields'

export default {
  name: "Organization",
  components: {
    BpDialog,
    BpForm,
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
            fields: createOrganizationFields,
            data: {test: 'here'}
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
                label: 'Submit',
                callback: this.organizationFormSave
              }
            ]
          }
        }
      }
    }
  },
  updated() {

  },
  methods: {
    addOrganization () {
      this.$refs.organizationsForm.reset()
      this.addForm.dialog.props.show = true
    },
    async organizationFormSave () {
      let payload = {}

      this.addForm.form.props.fields.forEach((field) => {
        payload[field.key] = field.value
      })

      let success = false
      try {
        //const OrganizationService = ServiceFactory.get('organization')

        //const response = await OrganizationService.get()
        let response = false

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