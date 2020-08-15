<template>
  <div id="home">
    <Header
      v-bind:title="headerTitle"
      v-bind:gameNav="game"
      v-bind:finished="finished"
      v-on:goBack="goBack"
      v-on:goNext="goNext"
      v-bind:nextLevelEnabled="nextLevelEnabled"
    />
    <main>
      <InstructionBlock />
      <FullwidthButton v-if="!game" v-on:click="startGame" text="Start Game" />
      <Game v-on:nextLevel="enableNextLevel" v-else v-bind:level="level" />
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
import Game from "../components/Game.vue";

export default Vue.extend({
  components: {
    Header,
    InstructionBlock,
    Footer,
    FullwidthButton,
    Game
  },
  data: function() {
    return {
      game: false,
      finished: false,
      level: 1,
      levels: 2,
      nextLevelEnabled: false
    };
  },
  methods: {
    startGame: function() {
      this.game = true;
    },
    goBack: function() {
      if (this.level > 1) {
        this.level--;
      } else {
        this.game = false;
      }
    },
    goNext: function() {
      this.level++;
      this.nextLevelEnabled = false;
    },
    enableNextLevel: function() {
      if (this.level < this.levels) {
        this.nextLevelEnabled = true;
      }
    }
  },
  computed: {
    headerTitle: function(): string {
      return this.game ? `Level ${this.level}` : "Boxgame";
    }
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
