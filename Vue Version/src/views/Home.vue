<template>
  <div id="home">
    <Header />
    <main>
      <InstructionBlock />
      <FullwidthButton href="level1.html" text="Start Game" />
      <Footer />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header.vue";
import InstructionBlock from "../components/InstructionBlock.vue";
import Footer from "../components/Footer.vue";
import FullwidthButton from "../components/FullwidthButton.vue";

export default Vue.extend({
  components: {
    Header,
    InstructionBlock,
    Footer,
    FullwidthButton
  }
});
</script>

<style lang="scss">
::selection {
  color: white;
  background-color: turquoise;
}
sub::selection {
  color: #30bfb1;
}
html {
  font-family: "Roboto", sans-serif;
  background-color: #111b1d;
  color: white;
}
h3 {
  font-size: 1.8rem;
}
body {
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
