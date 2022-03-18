<template>
  <v-dialog
      v-model="dialog"
      max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <a rel="noopener noreferrer"
         class="Button Button--white  button"
         v-bind="attrs"
         v-on="on">
        <div class="Button-caption">{{ title ? title : 'Get Whitelisted' }}</div>
      </a>
    </template>
    <v-card class="form-modal">
      <v-card-title class="text-h5">
        <span class="close-dialog" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </span>
        <p v-if="!success">Join our whitelist to use the platform on launch day</p>
        <p v-else>Thank You!</p>

      </v-card-title>
      <v-card-text v-if="!success">
        <v-form
            ref="form"
            lazy-validation
        >
          <v-text-field
              v-model="form.name"
              label="Full Name*"
              :rules="nameRules"
              required
          ></v-text-field>
          <v-text-field
              v-model="form.email"
              label="Email Address*"
              :rules="emailRules"
              required
          ></v-text-field>
          <v-text-field
              v-model="form.twitter"
              label="Twitter*"
              :rules="twitterRules"
              required
          ></v-text-field>
          <v-text-field
              v-model="form.phone"
              label="Your Telegram @username*"
              :rules="telegramRules"
              required
          ></v-text-field>
          <v-text-field
              v-model="form.age"
              label="Your ERC-20 Wallet Address*"
              :rules="walletRules"
              required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions v-if="!success">
        <v-btn
            style="margin: 0 auto"
            color="primary  btn"
            @click="submit()"
        >
          Join Competition
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import userApi from "~/api/userApi"
import {mapActions, mapGetters} from 'vuex'

export default {
  props: ['title'],
  data() {
    return {
      success: false,
      dialog: false,
      error: null,
      form: {
        valid: false,
        name: '',
        email: '',
        twitter: '',
        phone: '',
        age: '',
      },
      nameRules: [
        v => !!v || 'Name is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      twitterRules: [
        v => !!v || 'Twitter is required',
      ],
      telegramRules: [
        v => !!v || 'Telegram @username is required',
      ],
      walletRules: [
        v => !!v || 'ERC-20 Wallet Address is required',
      ],
    }
  },
  computed: mapGetters({
    user: 'chat/getUser',
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.form.guestId = this.user._id
        this.form.comment = this.form.twitter
        userApi.bookUser(this.form, async response => {
          this.success = true
        })
      }
    },
  }
}
</script>

<style>

.form-modal {
  background-color: #FFF !important;
}

.form-modal .v-card__text {
  background-color: #FFF !important;
}

.close-dialog {
  width: 100%;
  text-align: right;
}

.text-h5 p {
  text-align: center;
  width: 79%;
  margin-top: -30px;
  margin-left: 10%;
}

</style>