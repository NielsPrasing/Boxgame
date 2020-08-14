<template>
  <div class="col-6 block">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["title", "text"]
});
</script>

<style lang="scss">
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
.col-6 {
  grid-column: span 12;
}
h2 {
  font-size: 2.2rem;
}
@media only screen and (min-width: 768px) {
  .col-6 {
    grid-column: span 6;
  }
}
</style>
