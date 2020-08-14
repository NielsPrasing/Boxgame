<template>
  <div class="flex">
    <div class="col-12 button">
      <LinkButton @click.native="emitClick" :text="text" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LinkButton from "./LinkButton.vue";

export default Vue.extend({
  components: {
    LinkButton
  },
  props: ["href", "text"],
  methods: {
    emitClick: function() {
      this.$emit("click");
    }
  }
});
</script>

<style lang="scss">
.flex {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  margin-bottom: 20px;
}
.col-12 {
  grid-column: span 12;
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
