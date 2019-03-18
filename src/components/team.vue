<template>
  <div>
    <v-layout row wrap>
      <v-flex md12>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h1 class="headline mb-0 text-uppercase">key personnel</h1>
              <div
                class="text-md-justify"
              >The best answer of why teamwork is mandatory is - ask a question, get a great answer. Learn from experts and access insider knowledge. The success of companies depends largely on the rapport, communication and commitment that may exist among employees. When they work together, the activities flow more quickly and efficiently.</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-center class="trkDark5">
      <v-flex xs12 md4 class="mt-2">
        <v-card class="pa-1">
          <v-img
            src="https://www.solutions-4.co.uk/wp-content/uploads/2011/10/Bespoke-Boardroom-Table.jpg"
            height="300px"
          >
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class="white--text">
                <div class="display-1 pt-5">Board of Directors</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <template v-for="(item, index) in directors">
              <v-list-tile avatar :key="index" class="pt-1">
                <v-list-tile-avatar size="60">
                  <img :src="item.image">
                </v-list-tile-avatar>

                <v-list-tile-content class="pl-2">
                  <v-list-tile-title>{{item.name}}</v-list-tile-title>
                  <v-btn
                    flat
                    class="mx-0 px-0 grey--text text--darken-2 text-md text-capitalize caption font-weight-regular"
                  >
                    <v-icon left>work</v-icon>
                    <span>{{item.designation}}</span>
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset :key="index"></v-divider>
            </template>
          </v-list>

        </v-card>
      </v-flex>
      <v-flex xs12 md4 class="mt-2">
        <v-card class="pa-1">
          <v-img
            src="https://fanzlive.com/wp-content/uploads/2017/08/Selecting-Retail-Software-11-Critical-Questions-to-Ask-About-Implementation-1-930x450.jpg"
            height="300px"
          >
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class="white--text">
                <div class="display-1 pt-5 text-md-center">Implemetation Team</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <template v-for="(item, index) in implementation">
              <v-list-tile avatar :key="index" class="pt-1">
                <v-list-tile-avatar size="60">
                  <img :src="item.image">
                </v-list-tile-avatar>

                <v-list-tile-content class="pl-2">
                  <v-list-tile-title>{{item.name}}</v-list-tile-title>
                  <v-btn
                    flat
                    class="mx-0 px-0 grey--text text--darken-2 text-md text-capitalize caption font-weight-regular"
                  >
                    <v-icon left>work</v-icon>
                    <span>{{item.designation}}</span>
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset :key="index"></v-divider>
            </template>
          </v-list>

        </v-card>
      </v-flex>
      <v-flex xs12 md4 class="mt-2">
        <v-card class="pa-1">
          <v-img
            src="http://geekologist.co/wp-content/uploads/2017/06/design-team.jpg"
            height="300px"
          >
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class="white--text">
                <div class="display-1 pt-5">Development team</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <template v-for="(item, index) in developers">
              <v-list-tile avatar :key="index" class="pt-1">
                <v-list-tile-avatar size="60">
                  <img :src="item.image">
                </v-list-tile-avatar>

                <v-list-tile-content class="pl-2">
                  <v-list-tile-title>{{item.name}}</v-list-tile-title>
                  <v-btn
                    flat
                    class="mx-0 px-0 grey--text text--darken-2 text-md text-capitalize caption font-weight-regular"
                  >
                    <v-icon left>work</v-icon>
                    <span>{{item.designation}}</span>
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset :key="index"></v-divider>
            </template>
          </v-list>

        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-center class="trkDark5">
      <v-flex xs12 md4 class="mt-2">
        <v-card class="pa-1">
          <v-img
            src="http://www.cnes-csg.fr/automne_modules_files/standard/public/p9596_288eb994ad3ce8f245ff451201f3dddeP39088.jpg"
            height="300px"
          >
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class="white--text">
                <div class="display-1 pt-5">Operation Team</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <template v-for="(item, index) in opetators">
              <v-list-tile avatar :key="index" class="pt-1">
                <v-list-tile-avatar size="60">
                  <img :src="item.image">
                </v-list-tile-avatar>

                <v-list-tile-content class="pl-2">
                  <v-list-tile-title>{{item.name}}</v-list-tile-title>
                  <v-btn
                    flat
                    class="mx-0 px-0 grey--text text--darken-2 text-md text-capitalize caption font-weight-regular"
                  >
                    <v-icon left>work</v-icon>
                    <span>{{item.designation}}</span>
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset :key="index"></v-divider>
            </template>
          </v-list>

        </v-card>
      </v-flex>
      <v-flex xs12 md4 class="mt-2">
        <v-card class="pa-1">
          <v-img
            src="https://www.kpifire.com/wp-content/uploads/2018/02/presernt.jpg"
            height="300px"
          >
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class="white--text">
                <div class="display-1 pt-5 text-md-center">Marketing Team</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <template v-for="(item, index) in marketing">
              <v-list-tile avatar :key="index" class="pt-1">
                <v-list-tile-avatar size="60">
                  <img :src="item.image">
                </v-list-tile-avatar>

                <v-list-tile-content class="pl-2">
                  <v-list-tile-title>{{item.name}}</v-list-tile-title>
                  <v-btn
                    flat
                    class="mx-0 px-0 grey--text text--darken-2 text-md text-capitalize caption font-weight-regular"
                  >
                    <v-icon left>work</v-icon>
                    <span>{{item.designation}}</span>
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset :key="index"></v-divider>
            </template>
          </v-list>

        </v-card>
      </v-flex>
      <v-flex xs12 md4 class="mt-2">
        <v-card class="pa-1">
          <v-img
            src="https://i.pinimg.com/originals/4a/65/97/4a659726c014d3f02c48415122ce1916.jpg"
            height="300px"
          >
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class="white--text">
                <div class="display-1 pt-5">IT Support Team</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <template v-for="(item, index) in itSupports">
              <v-list-tile avatar :key="index" class="pt-1">
                <v-list-tile-avatar size="60">
                  <img :src="item.image">
                </v-list-tile-avatar>

                <v-list-tile-content class="pl-2">
                  <v-list-tile-title>{{item.name}}</v-list-tile-title>
                  <v-btn
                    flat
                    class="mx-0 px-0 grey--text text--darken-2 text-md text-capitalize caption font-weight-regular"
                  >
                    <v-icon left>work</v-icon>
                    <span>{{item.designation}}</span>
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset :key="index"></v-divider>
            </template>
          </v-list>

        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
    data(){
        return{
            directors:[
                {name:"Mr. Sayed Ahmed",designation:"Chairman",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Mr. Jamal Uddin Sikder",designation:"Vice Chairman",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Mr. Faruque Sikder",designation:"Managing Director",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Mr. Munir uddin Ahmed",designation:"Director",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Mr. Farid Ahmed",designation:"Director",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Mirza Noor Ahmed",designation:"Director",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Nooh Ul Alam Lelin",designation:"Director",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Pushpita Prithwee",designation:"Director",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}
            ],
            implementation:[
                {name:"Md. Faisal Bhuiyan",designation:"Manager-Accounting & ERP",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Md. Kamruzzaman",designation:"Sr. Executive ERP & VAT",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Md. Rabiul Islam",designation:"Executive ERP & VAT",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Ripon Kumar Chowdhury",designation:"Manager-Accounting & ERP",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Biplop Hossain",designation:"Manager-Accounting & ERP",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Monish Chakma",designation:"Manager-Accounting & ERP",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Md. Fahad Ahmed",designation:"Manager-Accounting & ERP",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
            ],
            developers:[
                {name:"Md. Kamrul Hasan",designation:"Project Manager & CTO",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Ashikuzzaman Juwel",designation:"Sr. Software Developer",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Khalid Bin Sarowar",designation:"Sr. Software Developer",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Saul Hamidur Rahman",designation:"Software Developer",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Md. Fahim Muntasir",designation:"Jr. Software Developer",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Md. Yusuf Ali",designation:"Jr. Software Developer",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Md. Robin Khan",designation:"Jr. Software Developer",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}
            ],
            itSupports:[
                {name:"Diluar Hossain",designation:"Executive(IT Support)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Nure Alam Siddique",designation:"Executive(Networking & IT Support)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Noor Al Safayet",designation:"Jr. Executive(IT Support)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}
            ],
            opetators:[
                {name:"Md. Rashedul Alam",designation:"Executive(Admin & Accounts)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Arifur Rahman",designation:"Executive(Admin)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Hasan Mahamud",designation:"Jr. Executive(Admin)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},

            ],
            marketing:[
                {name:"Mr. Farid Ahmed",designation:"Director",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Md. Abul Kashem",designation:"Asst. Manager(Marketing & Sales)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Rezwanul Haque",designation:"Sr. Executive(Marketing)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Khairul Hassan",designation:"Executive(Marketing)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Md. Saiful Hussain",designation:"Executive(Marketing)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},
                {name:"Md. Maninul Sadiqs",designation:"Executive(Marketing)",image:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}
            ]
        }
    }
};
</script>
<style>
.trkDark5 .v-responsive__content{
    background-color: rgba(0, 0, 0, 0.5) !important;
}
</style>
