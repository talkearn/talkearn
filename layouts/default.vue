<template>
  <v-app id="root">
    <nuxt/>
    <Chat mode="employee" :user="user"/>
    <Video mode="employee" :user="user"/>
    <Analytics type="client" :user="user"/>
  </v-app>
</template>

<script>

import {mapActions, mapGetters} from "vuex"
import NavComponent from '~/components/front/partials/header_';
import Footer from '@/components/front/partials/footer';
import Chat from '@/components/chat-module/chat';
import Video from '@/components/chat-module/video';
import Analytics from '@/components/analytics';

export default {
  data: () => ({
    userJoined: false,
    counter: 0,
    dialog: false,
  }),
  computed: mapGetters({
    user: 'chat/getUser',
    call: 'call/getCall',
    roomId: 'call/getRoomId',
  }),
  components: {
    NavComponent,
    Footer,
    Chat,
    Video,
    Analytics
  }
};
</script>
