<template>
  <div v-bind:id="pos" class="gamebutton-container">
    <button class="gamebutton button-primair" @click="emitClick">
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["text", "pos"],
  methods: {
    emitClick: function() {
      this.$emit("click");
    }
  }
});
</script>

<style lang="scss">
.gamebutton-container {
  display: flex;
  justify-content: center;
}
.gamebutton-container#pos-one {
  grid-area: pos-one;
}
.gamebutton-container#pos-two {
  grid-area: pos-two;
}
.gamebutton-container#pos-three {
  grid-area: pos-three;
}
.gamebutton-container#pos-four {
  grid-area: pos-four;
}
.gamebutton-container#pos-five {
  grid-area: pos-five;
}
.gamebutton {
  width: 15vw;
  height: 50px;
}
.button-primair {
  background-color: turquoise;
  padding: 10px 15px;
  border-radius: 8px;
  box-sizing: border-box;
  transition: background-color 0.2s;
}
.button-primair:hover {
  background-color: #006f70;
}
button {
  color: inherit;
  font: inherit;
  border: none;
}
button[disabled],
button[disabled]:hover {
  background-color: grey;
  color: #111b1d;
}
@media only screen and (min-width: 768px) {
  .gamebutton {
    width: 100px;
  }
}
</style>
