<template>
  <button class="button-primair" v-bind:disabled="disabled">{{ text }}</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["href", "text", "disabled"]
});
</script>

<style lang="scss">
.button button {
  display: inline-block;
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
</style>
