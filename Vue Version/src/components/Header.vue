<template>
  <header>
    <h1>{{ title }}</h1>
    <p v-if="!gameNav">This is a game made by ©JurriaanDesigns.</p>
    <nav v-else>
      <LinkButton @click.native="goBack" text="Back" />
      <LinkButton id="nxt-lvl" text="Next Level" disabled="true" />
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import LinkButton from "./LinkButton.vue";

export default Vue.extend({
  components: {
    LinkButton
  },
  props: ["title", "gameNav"],
  methods: {
    goBack: function() {
      this.$emit("goBack");
    }
  }
});
</script>

<style lang="scss">
header {
  margin: 3rem 0;
}
h1 {
  font-size: 3rem;
}
nav {
  display: flex;
  justify-content: space-between;
}
</style>
