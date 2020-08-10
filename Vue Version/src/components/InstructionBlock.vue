<template>
  <div class="flex">
    <InfoBlock
      title="Goal"
      text="The goal is to turn on all boxes. (No, not by sending nudes.)"
    />
    <InfoBlock
      title="Instructions"
      text="Use the buttons underneath the boxes. Find out what they do."
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InfoBlock from "./InfoBlock.vue";

export default Vue.extend({
  components: {
    InfoBlock
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
</style>
