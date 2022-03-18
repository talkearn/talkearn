<template>

  <div id="root">
    <header-area></header-area>

    <content-area></content-area>

    <footer-area></footer-area>
  </div>

</template>

<script>

import '@/assets/styles.css';

import contentArea from "~/components/landing/contentArea";
import headerArea from "~/components/landing/headerArea";
import footerArea from "~/components/landing/footerArea";

export default {
  components: {contentArea, headerArea, footerArea}
}
</script>
