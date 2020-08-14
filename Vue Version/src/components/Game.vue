<template>
  <div class="col-12 block level">
    <Box v-bind:on="box1On" />
    <Box v-bind:on="box2On" />
    <Box v-bind:on="box3On" />
    <Box v-bind:on="box4On" />
    <Box v-bind:on="box5On" />
    <GameButton pos="pos-two" text="1" />
    <GameButton pos="pos-three" text="2" />
    <GameButton pos="pos-four" text="3" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Box from "./Box.vue";
import GameButton from "./GameButton.vue";

export default Vue.extend({
  components: {
    Box,
    GameButton
  },
  props: ["level"],
  data: function() {
      return {
          box1On: false,
          box2On: false,
          box3On: false,
          box4On: false,
          box5On: false
      }
  }
});
</script>

<style lang="scss">
.col-12 {
  grid-column: span 12;
}
.block {
  background-color: #212b2d;
  border-radius: 12px;
  padding: 1.5rem 1.2rem 1.8rem;
}
.block > :first-child {
  margin-top: 0;
}
.block > :last-child {
  margin-bottom: 0;
}
.level {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    ". . . . ."
    "pos-one pos-two pos-three pos-four pos-five";
}
</style>
