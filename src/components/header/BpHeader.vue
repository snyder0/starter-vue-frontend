<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      :mini-variant="mini"
      disable-resize-watcher
      app
      class="hidden-sm-and-up"
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
          @click="goToPage(item.path)"
        >
          <v-layout row>
            <v-flex xs2>
              <v-list-tile-action>
                <v-icon color="primary">
                  {{ item.icon }}
                </v-icon>
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
        :justify-end="mini ? false : true"
        :justify-center="mini ? true : false"
      >
        <v-btn
          v-if="mini"
          icon
          flat
          color="accent"
          class="hidden-md-and-up"
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
      app
      flat
    >
      <v-toolbar-side-icon 
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      >
        <v-icon>
          {{ !drawer ? 'menu' : 'close' }}
        </v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        Toolbar Title
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items
        v-for="(item, index) in items"
        :key="index"
        class="hidden-sm-and-down"
      >
        <v-btn 
          flat 
          @click="goToPage(item.path)"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-menu
          offset-y
          offset-x
          open-on-hover
          max-height
          max-width
        >
          <v-btn
            slot="activator"
            flat
          >
            <v-icon
              color="primary"
              class="mr-1"
            >
              account_circle
            </v-icon>
            User Menu
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(userMenuItems, index) in userMenu"
              :key="index"
            >
              <v-icon
                class="mr-3"
                color="primary"
              >
                {{ userMenuItems.icon }}
              </v-icon>
              <v-list-tile-title>{{ userMenuItems.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script type="ts">

export default {
  name: 'BpHeader',
  data () {
    return {
      drawer: false,
      clipped: false,
      items: [
        { title: 'Home', icon: 'home', path: '/' },
        { title: 'About', icon: 'info', path: '/about' },
        { title: 'Organizations', icon: 'domain', path: '/organizations' }
      ],
      userMenu: [
        { title: 'Settings', icon: 'settings', path: '/usersettings' },
        { title: 'Log Out', icon: 'exit_to_app', path: '/logout' }
      ],
      mini: false,
      right: null
    }
  },
  methods: {
    goToPage (path) {
      this.$router.push(path);
    }
  }
}
</script>