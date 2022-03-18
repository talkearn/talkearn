<template>
  <div>
    <div class="Pollen-nav-container">
      <header class="Pollen-nav-desktop">

        <a aria-current="page" class="Pollen-logo active" href="/">
          <img src="/landing/logo.svg" class="is-static" alt="logo" width="100%">
        </a>

        <div class="Pollen-desktop-links">
          <a href="#join" class="Nav-link first">Talk2Earn</a>
          <a href="#team" class="Nav-link second">Team</a>
          <a href="#ecosystem" class="Nav-link third">EcoSystem</a>
          <a href="#tokens" class="Nav-link fourth">Tokens</a>
          <a href="#about" class="Nav-link first">About</a>
        </div>

        <div class="Pollen-desktop-buttons">
          <a rel="noopener noreferrer" target="_blank" class="Button Button--white  button"
             href="https://docs.talkearn.app">
            <div class="Button-caption">Whitepaper</div>
          </a>
          <formArea></formArea>
        </div>
        <div class="Pollen-desktop-icons">
          <a class="Pollen-twitter" target="_blank" href="https://twitter.com/TalkEarn">
            <img src="/landing/twitter-icon-white-transparent-24.svg" alt="twitter">
          </a>
          <a class="Pollen-telegram" target="_blank" href="https://t.me/talkearn_official">
            <img src="/landing/telegram-icon-white-transparent.svg" alt="telegram">
          </a>
          <a class="Pollen-discord medium-icon" target="_blank" href="https://talkearn.medium.com/">
            <img src="/landing/Medium-Logo.svg" alt="medium" style="height: 15px;">
          </a>
        </div>
      </header>

      <header :class="['Pollen-nav-mobile', drawer, 'false', 'is-scrolled']">
        <div class="Pollen-nav-mobile-header">
          <div class="Pollen-logo">
            <img src="/landing/logo.svg" class="is-static" alt="logo" width="100%">
          </div>
          <div class="mx-4 hidden-sm-and-down"></div>
          <div :class="['App-hamburger', hamburger]"><span class="App-hamburger-inner" @click="showMenu()"></span></div>
        </div>

        <div class="Nav">
          <a href="#join" class="Nav-link" @click="showMenu()">Talk2Earn</a>
          <a href="#team" class="Nav-link" @click="showMenu()">Team</a>
          <a href="#ecosystem" class="Nav-link" @click="showMenu()">EcoSystem</a>
          <a href="#tokens" class="Nav-link" @click="showMenu()">Tokens</a>
          <a href="#about" class="Nav-link" @click="showMenu()">About</a>
          <div class="Nav-link button" @click="showMenu()">
            <formArea></formArea>
          </div>
        </div>
        <div :class="['Nav-icons', hidden]">

          <a class="Pollen-telegram" target="_blank" href="https://t.me/talkearn_official">
            <img src="https://pollen.id/static/media/telegram.451c86f3.svg" alt="join us on telegram">
          </a>
          <a class="Pollen-twitter" target="_blank" href="https://twitter.com/TalkEarn">
            <img src="https://pollen.id/static/media/twitter.a6815caa.svg" alt="follow us on twitter">
          </a>
          <a class="Pollen-discord medium-icon" target="_blank" href="https://talkearn.medium.com/">
            <img src="/Medium-Logo.svg" alt="medium" style="height: 15px;">
          </a>

        </div>
      </header>
    </div>
  </div>
</template>

<script>

import formArea from '~/components/landing/form'

export default {
  data: () => ({
    drawer: false,
    hamburger: false,
    hidden: 'is-hidden',
  }),
  name: "header-area",
  components: {formArea},
  methods: {
    showMenu() {
      if (this.drawer === false) {
        this.drawer = 'is-expanded'
        this.hamburger = 'is-active'
        this.hidden = false
      } else {
        this.drawer = false
        this.hamburger = false
        this.hidden = 'is-hidden'
      }
    }
  }
}
</script>
