<template>
  <nav class="top30">
    <v-toolbar app class="teal lighten-4">
      <v-switch v-model="drawer" color="teal  lighten-3" hide-details style="max-width:30px;"></v-switch>
      <v-toolbar-title class="text-uppercase grey--text text--darken-3">
        <span>Symphony</span>
        <span class="font-weight-light">Softtech Ltd.</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn flat slot="activator">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list class="grey white--text">
          <v-list-tile v-for="link in links" :key="link.text" :to="link.route">
            <v-list-tile-title>{{link.text}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app color class="cyan darken-4">
      <v-layout column align-center class="trkWhiteBg">
        <v-flex class="my-4">
          <v-img src="src/assets/logo3.png" min-width="300"></v-img>
        </v-flex>
      </v-layout>
      <v-list class="mt-2">
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon dark>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-footer class="grey darken-2 py-4">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text caption text-md-center">
             ©2019. ALL RIGHT RESERVED BY SYMPHONY SOFTTECH LTD.
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "info", text: "About", route: "/about" },
        { icon: "dock", text: "Portfolio", route: "/portfolio" },
        { icon: "people_outline", text: "Team", route: "/team" },
        { icon: "flash_on", text: "Skills", route: "/skills" },
        { icon: "work", text: "Products", route: "/products" },
        { icon: "room_service", text: "Services", route: "/services" },
        { icon: "group", text: "Clients", route: "/clients" },
        { icon: "email", text: "Contact", route: "/contact" }
      ],
      snackbar: false
    };
  }
};
</script>

<style>
.trkWhiteBg {
  background-color: rgba(253, 253, 253, 1);
}
</style>
