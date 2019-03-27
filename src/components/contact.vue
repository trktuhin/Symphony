<template>
  <div>
    <section>
      <v-container grid-list-xl class="pa-0">
        <v-layout row wrap justify-center class>
          <v-flex md12 class="pb-1">
            <v-card class>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="indigo--text">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title
                      class="indigo--text"
                    >+88 02 58 157 384, +88 01872 650 660 - 669</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title
                      class="text-lowercase blue--text"
                    >INFO@SYMPHONYSOFTT.COM, FARUQUE.SIKDER@SYMPHONYSOFTT.COM, SYMPHONYBD@GMAIL.COM, OFFICE@SYMPHONYSOFTT.COM</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="orange--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title
                      class="text-capitalize orange--text"
                    >HOUSE # 02 (3RD FL.), LAKE CIRCUS, 3RD LANE KALABAGAN, DHAKA-1205, BANGLADESH.</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex md12>
            <v-card flat tile class="indigo lighten-1 white--text text-xs-center">
              <v-card-text>
                <v-btn v-for="icon in icons" class="mx-3 white--text" icon large>
                  <v-icon size="30px" @click="redirectTo(icon.navigateLink)">{{ icon.classes }}</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md12 class="pt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9756650053487!2d90.3782467149813!3d23.74824718459048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b21d3582c1%3A0x83fc5cd1c9aeab6b!2sSymphony+Softtech+Limited!5e0!3m2!1sen!2sbd!4v1553622457762"
              width="100%"
              height="400"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </v-flex>
        </v-layout>
        
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        {classes:'fab fa-facebook',navigateLink:'https://www.facebook.com/pages/Symphony-Softtech-Ltd/430417377062246'},
        {classes:'fab fa-twitter',navigateLink:'https://twitter.com/symphonybd'},
        {classes:'fab fa-google-plus',navigateLink:''},
        {classes:'fab fa-linkedin',navigateLink:'https://www.linkedin.com/company/symphony-softtech-ltd-'},
        {classes:'fab fa-instagram',navigateLink:''}
      ]
    };
  },
  methods:{
    redirectTo(redirectUrl){
      window.open(redirectUrl, '_blank');
    }
  }
};
</script>
<style>
</style>

