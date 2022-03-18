<template>
  <footer class="Footer">
    <div class="Nav Footer-links">
      <a href="#">Top</a>
      <a target="_blank" href="https://docs.talkearn.app">Docs</a>
      <policies></policies>
      <terms></terms>
    </div>
    <div class="Footer-icons">
      <a class="Pollen-twitter" target="_blank" href="https://twitter.com/TalkEarn">
        <img src="/landing/twitter-icon-white-transparent-24.svg" alt="twitter">
      </a>
      <a class="Pollen-telegram" target="_blank" href="https://t.me/talkearn_official">
        <img src="/landing/telegram-icon-white-transparent.svg" alt="telegram">
      </a>
      <a class="Pollen-discord medium-icon" target="_blank" href="https://talkearn.medium.com/">
        <img src="/landing/Medium-Logo.svg" alt="medium" style="height: 15px;">
      </a>
      <a class="Pollen-discord medium-icon" target="_blank" href="https://github.com/talkearn/talkearn">
        <img src="/landing/github-logo.svg" alt="medium" style="height: 15px;">
      </a>
    </div>
    <div class="Footer-copyright mobile">© Copyright 2021 — TalkEarn</div>
  </footer>
</template>


<script>

import policies from "~/components/landing/policies";
import terms from "~/components/landing/terms";

export default {
  name: "footer-area",
  components: {policies, terms}
}
</script>
