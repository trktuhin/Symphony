<template>
  <v-layout row wrap>
    <v-flex md12>
      <v-card>
        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile v-for="subItem in item.items" :key="subItem.title">
              <v-list-tile-content>
                <v-list-tile-title class="body-1">
                  <div>
                    <v-icon small color="orange">done</v-icon>
                    {{ subItem.title }}
                  </div>
                </v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>

    <v-flex md12 class="mt-2">
      <v-card>
        <v-list>
          <v-list-group
            v-for="item in OtherItems"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile v-for="subItem in item.items" :key="subItem.title">
              <v-list-tile-content>
                <v-list-tile-title class="body-1">
                  <div>
                    <v-icon small color="orange">done</v-icon>
                    {{ subItem.title }}
                  </div>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          action: "local_activity",
          title: "Programming Language",
          items: [
            { title: "C#" },
            { title: "VB" },
            { title: "SQL" },
            { title: "Ruby" },
            { title: "HTML5" },
            { title: "jQuery" },
            { title: "Ajax" },
            { title: "Asp.net" },
            { title: "PHP" }
          ]
        },
        {
          action: "restaurant",
          title: "Framework",
          items: [
            { title: "Mircrosoft Dot Net" },
            { title: "MVC 4 & 5" },
            { title: "Rails" },
            { title: "Twitter Bootstrap" },
            { title: "Vue js" },
            { title: "Vuetify" }
          ]
        },
        {
          action: "school",
          title: "Databases/RDMS",
          items: [{ title: "SQL Server" }, { title: "My Sql" }]
        },
        {
          action: "directions_run",
          title: "CMS",
          items: [
            { title: "Jhoomla" },
            { title: "Drupal" },
            { title: "Wordpress" }
          ]
        },
        {
          action: "healing",
          title: "E-Commerse",
          items: [{ title: "OSCommerse" }, { title: "Majento" }]
        },
        {
          action: "content_cut",
          title: "Operating Systems/Platforms",
          items: [{ title: "MS Windows (XP,7,8,10)" }, { title: "Linux" }]
        },
        {
          action: "local_offer",
          title: "Applications/Web Servers",
          items: [
            { title: "IIS" },
            { title: "Apache" },
            { title: "Oracle Application" },
            { title: "Tomcat" }
          ]
        },
        {
          action: "local_offer",
          title: "IDE",
          items: [
            { title: "Visual Studio" },
            { title: "VS Code" },
            { title: "Net beans" },
            { title: "Eclipse" },
            { title: "Notepad++" }
          ]
        }
      ],
      OtherItems: [
        {
          action: "local_activity",
          title: "Project Management Skills",
          items: [
            { title: "Assist with communication." },
            { title: "Effectively manages assigned business." },
            { title: "Escalates any adjusted client time frames." },
            { title: "Ensure that assigned orders are accurately maintained." },
            {
              title:
                "Participates in Project planning and/or facilitates efforts."
            },
            {
              title:
                "Consistantly executes implementation process & methodology"
            },
            {
              title:
                "Oversees accurate achievement of milestones through entire cycle."
            },
            {
              title:
                "Contacts clients during the whole process to access their satisfaction"
            },
            {
              title:
                "Fully utilize standardized tools & technology to support solution delivery."
            },
            {
              title:
                "Timely enternal communication to Sales & Implementation team members."
            },
            {
              title:
                "Seeks feedback on products & service to ensure implementation experience."
            }
          ]
        },
        {
          action: "restaurant",
          title: "Business Analysis Skills",
          items: [
            { title: "Configure & Installs." },
            { title: "Assesses the appropriate method." },
            { title: "Writes business requiremnts documents." },
            {
              title:
                "Coordinates with clients for technical support to ressolve issues."
            },
            {
              title:
                "Consults on the installation of client site software and equipment."
            },
            {
              title:
                "Provides functional design guidance including plans and procedures."
            },
            {
              title:
                "Conducts needs analysis to determine appropriate solution requirements."
            },
            {
              title:
                "Provides suggestions to enhance efficiency and continuous improvement."
            },
            {
              title:
                "Identifies resources for the configuration of client data for import & export."
            },
            {
              title:
                "Participates in project plan schedule  development, monitoring & reporting."
            },
            {
              title:
                "Communicates with project manager about project progress or modification."
            },
            {
              title:
                "Determines any enhancement required & provide specification to development team."
            }
          ]
        },
        {
          action: "school",
          title: "Quality Assurance Skills",
          items: [
            { title: "Collects informations & reviews." },
            { title: "Generates & Maintain test plans." },
            { title: "Validates & Tests solutions according to test plans." },
            {
              title: "Provides client support during User Acceptance Testing."
            },
            {
              title:
                "Ensures accuracy of client set up variables & calculations"
            }
          ]
        },
        {
          action: "directions_run",
          title: "Training & Documentation Skills",
          items: [
            { title: "Clear & concise written/verbal communication skills" },
            { title: "Develops & Delivers end-user training curriculum." },
            {
              title:
                "Assesses training needs based on unique implementation parameters."
            },
            {
              title:
                "Coordinates training to ensure client attendance in all training classes."
            }
          ]
        },
        {
          action: "healing",
          title: "Personal Skills",
          items: [
            { title: "Enthusiasm, Energy, Professionalism" },
            {
              title:
                "Ability to multi-task with outstanding organizational skills"
            },
            {
              title:
                "Ability to speak clearly & effectively in interpersonal situations"
            },
            {
              title:
                "The ability to work in a fast paced cooperative team environment"
            },
            {
              title:
                "Creativity in troubleshooting business process & software problems"
            },
            {
              title:
                "Ability to learn software & technology quickly in a fast changing environment"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
.v-list__group__items .v-list__tile {
  height: 35px !important;
}
.v-list__group__items .v-list__tile:hover {
  background-color: grey;
  color: white;
}
</style>
