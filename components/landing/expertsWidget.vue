<template>
  <section class="experts">
    <v-container>
      <v-row align="center" justify="center">
        <v-col
            v-for="(item, i) in experts"
            :key="i"
            class="col-lg-3 col-md-6 col-12 d-flex child-flex"
        >
          <v-card>
            <v-badge
                v-if="item.online === true"
                bordered
                bottom
                color="#27ae60"
                content="ONLINE"
                offset-x="10"
                offset-y="10"
            >
            </v-badge>
            <v-img
                :src="`/avatars/${item.avatar}`"
                aspect-ratio="1"
                class="grey lighten-2"
            >
            </v-img>
            <v-card-title class="title justify-center">
              {{ item.name }}
            </v-card-title>
            <v-card-subtitle class="text-center">
              {{ item.position }}
            </v-card-subtitle>
            <v-card-actions
                class="pb-5 justify-center"
            >
<!--              <v-btn-->
<!--                  v-if="item.status"-->
<!--                  color="primary"-->
<!--                  @click="openVideoCall(item)"-->
<!--              >-->
                <v-icon left @click="openVideoCall(item)" color="white">mdi-phone</v-icon>
<!--              </v-btn>-->
<!--              <v-btn-->
<!--                  color="primary"-->
<!--                  @click="openDialog(item)"-->
<!--              >-->
                <v-icon left @click="openDialog(item)" color="white">mdi-chat</v-icon>
<!--              </v-btn>-->
<!--              <v-btn-->
<!--                  target="_blank"-->
<!--                  color="primary"-->
<!--                  :href="item.phone"-->
<!--              >-->
              <a :href="item.phone" target="_blank">
                <v-icon left  color="white">mdi-linkedin</v-icon>
              </a>

<!--              </v-btn>-->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
  computed: mapGetters({
    refreshUserData: 'dialog/getRefreshUserData',
    trans: 'getTranslations',
    experts: 'getExperts',
    changedEmployee: 'getChangedEmployee',
  }),
  watch: {
    async refreshUserData() { // To test this method...
      await this.getExpertsList()
    },
    async changedEmployee() {
      await this.getExpertsList()
    },
  },
  mounted() {
    this.getExpertsList()
  },
  methods: {
    ...mapActions({
      getExpertsList: 'getExpertsList',
      setInterlocutor: 'dialog/setInterlocutor',
      initCall: 'dialog/initCall',
    }),
    openDialog(user) {
      this.setInterlocutor(null)
      this.setInterlocutor(user)
    },
    openVideoCall(user) {
      this.initCall(user)
    }
  }
}
</script>

<style scoped lang="scss">
.experts {
  padding-bottom: 50px;

  .v-badge {
    position: absolute;
    z-index: 4;
    top: 20px;
    left: 10px;
  }
}

.experts {
  //background-color: $primary_dark !important;
  margin-top: 30px;
}

.experts-heading .display-1 {
  color: #FFF !important
}

.experts-heading {
  color: #FFF !important;
}

.experts-heading p {
  max-width: 500px;
  margin: 20px auto;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}

.v-application .justify-center {
  color: #FFF;
}

.experts .v-card__subtitle {
  margin-top: 0 !important;
}
</style>
