<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      :mini-variant="mini"
      enable-resize-watcher
      app
    >
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Main Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list
        class="pt-0"
        dense
      >
        <v-divider />
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="menuSubmit(item)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-if="mini"
          @click.stop="mini = !mini"
        >
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile
          v-if="!mini"
          align-end
          @click.stop="mini = !mini"
        >
          <v-list-tile-action>
            <v-icon>
              chevron_left
            </v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      dense 
      fixed 
      app 
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon 
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>
        Ralloc
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          flat 
          @click="formTesting"
        >
          Form Testing
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

export default {
  name: 'Header',
  inject: ['takeAction'],
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'home', path: '/' },
        { title: 'About', icon: 'info', path: '/about' },
        { title: 'Organizations', icon: 'domain', path: '/organizations' }
      ],
      mini: true,
      clipped: false,
      right: null
    }
  },
  computed: {

  },
  methods: {
    formTesting (items) {
      this.takeAction(items)
    },
    menuSubmit (item) {
      this.$router.push(item.path)
    }
  }

}
</script>

<style>

</style>