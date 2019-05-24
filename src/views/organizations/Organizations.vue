<template>
  <v-container fluid>
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
                @click
              >
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title" />
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon
                    hover
                    :color="grey"
                  >
                    edit
                  </v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
export default {
  name: "Organization",
  components: {},
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
      items2: [
        {
          title: "Travis Howard",
        }
      ]
    };
  }
};
</script>
