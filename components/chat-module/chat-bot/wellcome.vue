<template lang="html">
  <v-card-text class="chat-bot">
    <div class="text-center" v-if="!alert">
      <h3 class="text-left">Hello</h3>
      <p class="text-left">{{ chatBotMessage }}</p>
      Talk to us Live:
      <section class="text-left" @click="attemptToCall()">
        <v-icon>mdi-video</v-icon>
        <span class="section-title">Web chat</span>
        Chat with one of our friendly experts
      </section>
      Or click below the option You like
      <div class="discus-options text-left">
        <span @click="attemptToRequestCall()"><v-icon color="primary">mdi-phone</v-icon>I want You to contact me</span>
        <span @click="attemptToDialog()"><v-icon color="primary">mdi-chat</v-icon>I want You to write me here</span>
        <span @click="clossDialog()"><v-icon color="primary">mdi-close</v-icon>I want You to write me here</span>
      </div>
    </div>
    <p v-if="alert" class="text-center">
      Thanks for the reply. Contact us whenever you need help. The chat will automatically close in
    </p><br>
    <hr>
    <br>
  </v-card-text>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import userApi from '@/api/userApi'

export default {
  props: ['recipient'],
  data() {
    return {
      employee: this.lastMessage ? this.lastMessage.sender : null,
      counter: null,
      message: '',
      alert: false,
      counter: 5,
      assigned: false,
    }
  },
  computed: mapGetters({
    language: 'getLanguage',
    trans: 'getTranslations',
    chatBotMessage: 'chat/getChatBotMessage',
    lastMessage: 'dialog/getLastMessage',
    user: 'chat/getUser',
  }),
  mounted() {
    this.$nuxt.$on('checkAssignedStatut', () => {
      if (this.lastMessage.employee) {
        console.log(this.lastMessage.employee);
        if (this.lastMessage.employee._id !== this.user._id) {
          this.employee = this.lastMessage.employee
        } else {
          this.employee = this.lastMessage.client
        }
      }

      // this.employee = this.lastMessage ? this.lastMessage.employee : null
      if (this.employee) {
        this.$nuxt.$emit('closeChatBotDialog')
        this.openDialog(this.employee)
      }
    })
  },
  methods: {
    ...mapActions({
      initCall: 'dialog/initCall',
      createMessage: 'dialog/createMessage',
      createMessageFromSelf: 'dialog/createMessageFromSelf',
      setInterlocutor: 'dialog/setInterlocutor',
    }),
    async attemptToCall() {
      await this.findEmployee()
      if (this.employee !== null) {
        this.assigned = true
        this.$nuxt.$emit('closeChatBotDialog')
        this.openVideoCall(this.employee)
      } else {
        await this.findOfflineEmployee()
        if (this.employee) {
          this.message = `${'Hi! My name is '} ${this.employee.name}
                                    ${'. I\'m in another discussion now. Please leave a contact number and I will contact You in 30 minutes (during working hours: working days 10:00 - 19:00)'}`
          this.sendMessage(this.user._id, this.employee._id, this.message)
        }
      }
    },
    async attemptToRequestCall() {
      await this.findEmployee()
      if (this.employee === null) {
        await this.findOfflineEmployee()
      }

      if (this.employee) {
        this.message = `${'Hi! My name is '} ${this.employee.name}
                                ${'. Please leave a contact number and I will contact You in 30 minutes (during working hours: working days 10:00 - 19:00)'}`
        this.sendMessage(this.user._id, this.employee._id, this.message)
      }
    },
    async attemptToDialog() {
      await this.findEmployee()
      if (this.employee === null) {
        await this.findOfflineEmployee()
      }

      if (this.employee) {
        this.message = `${'Hi! My name is '} ${this.employee.name}
                                ${'. How can I help you?'}`
        this.sendMessage(this.user._id, this.employee._id, this.message)
      }
    },
    clossDialog() {
      this.alert = true
      const timer = setInterval(() => {
        this.counter = this.counter - 1
      }, 1000)
      setTimeout(() => {
        this.alert = false
        this.$nuxt.$emit('closeChatBotDialog')
        clearTimeout(timer)
        this.counter = 5
      }, 5000)
    },
    async findEmployee() {
      await userApi.getRandomEmployee(response => this.employee = response)
    },
    async findOfflineEmployee() {
      await userApi.getRandomOfflineEmployee(response => this.employee = response)
    },
    openVideoCall(user) {
      this.initCall(user)
    },
    openDialog(user) {
      this.setInterlocutor(null)
      this.setInterlocutor(user)
    },
    sendMessage(to, from, message) {
      if (to) {
        const sendBy = 'employee'

        const data = {
          senderId: from,
          recepientId: to,
          clientId: to,
          employeeId: from,
          message: message,
          sendBy: sendBy,
          session: to + from,
          callAlert: false,
        }

        this.createMessage(data).then(() => {
          this.createMessageFromSelf({message: this.lastMessage, to, from})
          this.assigned = true
          this.$nuxt.$emit('closeChatBotDialog')
        })
      }
    }
  }
}
</script>

<style lang="scss">
.discus-options {
  margin-bottom: 30px;
}

.discus-options span {
  display: block;
  padding: 10px;
  color: $custom_blue;
  font-weight: 500;
  cursor: pointer;
}

.video-dialog-window {
  background-color: #FFF !important;
}
</style>
