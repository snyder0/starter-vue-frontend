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
        fill-height
        class="pt-0"
        dense
      >
        <v-divider />
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="menuSubmit(item)"
        >
          <v-layout row>
            <v-flex xs2>
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
            </v-flex>
            <v-flex xs10>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-flex>
          </v-layout>
        </v-list-tile>
      </v-list>
        
      <v-layout
        align-end
        justify-end
      >
        <v-btn
          v-if="mini"
          icon
          flat
          color="accent"
          @click.stop="mini = !mini"
        >
          <v-icon>chevron_right</v-icon>
        </v-btn>
        <v-btn
          v-if="!mini"
          icon
          flat
          color="accent"
          @click.stop="mini = !mini"
        >
          <v-icon>chevron_left</v-icon>
        </v-btn>
      </v-layout>
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
      <v-toolbar-items>
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
      mini: false,
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