<template>
  <a class="button-primair" :href="href">{{ text }}</a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["href", "text"]
});
</script>

<style lang="scss">
.button a {
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
a:any-link,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>
