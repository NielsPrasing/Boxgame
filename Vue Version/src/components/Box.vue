<template>
  <div class="box-container">
    <div v-if="on" class="box light" />
    <div v-else class="box dark" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["on"]
});
</script>

<style lang="scss">
.box-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}
.box {
  width: 15vw;
  height: 15vw;
}
.dark {
  background-image: radial-gradient(closest-side, grey, grey);
}
.light {
  position: absolute;
  background-image: radial-gradient(closest-side, yellow, #ffff77 80%);
  box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.2),
    0 0 10px 4px rgba(255, 255, 156, 0.7);
  transition: opacity 0.5s;
}
@media only screen and (min-width: 768px) {
  .box {
    width: 100px;
    height: 100px;
  }
}
</style>
