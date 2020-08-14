<template>
  <div class="col-12 block level">
    <Box v-bind:on="boxStates.box1On" />
    <Box v-bind:on="boxStates.box2On" />
    <Box v-bind:on="boxStates.box3On" />
    <Box v-bind:on="boxStates.box4On" />
    <Box v-bind:on="boxStates.box5On" />
    <GameButton
      v-bind:disabled="disableButtons"
      v-on:click="gameButtonClicked(1)"
      pos="pos-two"
      text="1"
    />
    <GameButton
      v-bind:disabled="disableButtons"
      v-on:click="gameButtonClicked(2)"
      pos="pos-three"
      text="2"
    />
    <GameButton
      v-bind:disabled="disableButtons"
      v-on:click="gameButtonClicked(3)"
      pos="pos-four"
      text="3"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Box from "./Box.vue";
import GameButton from "./GameButton.vue";
import BoxStates from "../models/BoxStates";

type levelOptions = {
  [key: number]: Array<string>;
};

function getOriginalData() {
  return {
    boxStates: new BoxStates(),
    levels: [
      {
        1: ["r:5->1", "r:1->2", "r:2->3", "r:3->4", "r:4->5"],
        2: ["o:3"],
        3: ["r:1->5", "r:2->1", "r:3->2", "r:4->3", "r:5->4"]
      },
      {
        1: ["o:1", "o:3"],
        2: ["r:1->2", "r:4->1", "r:2->4", "f:3"],
        3: ["o:3", "o:5"]
      }
    ] as Array<levelOptions>,
    disableButtons: false
  };
} 

export default Vue.extend({
  components: {
    Box,
    GameButton
  },
  props: ["level"],
  data: function() {
    return getOriginalData();
  },
  watch: {
    level: function() {
      Object.assign(this.$data, getOriginalData());
    }
  },
  methods: {
    gameButtonClicked: function(buttonNumber: number) {
      const level: levelOptions = this.levels[this.level - 1];
      const settings: Array<string> = level[buttonNumber];
      const newStates = this.generateNewStates(settings);
      this.boxStates = newStates;

      this.checkFinished(this.boxStates);
    },
    generateNewStates: function(settings: Array<string>) {
      let states = new BoxStates(this.boxStates);

      for (const setting of settings) {
        const action: string = setting[0];

        switch (action) {
          case "o": {
            const boxNumber = parseInt(setting[2]);
            states = this.turnOn(states, boxNumber);
            break;
          }
          case "f": {
            const boxNumber = parseInt(setting[2]);
            states = this.turnOff(states, boxNumber);
            break;
          }
          case "r": {
            const boxNumberIn = parseInt(setting[2]);
            const boxNumberOut = parseInt(setting[5]);
            states = this.rotate(
              states,
              this.boxStates,
              boxNumberIn,
              boxNumberOut
            );
            break;
          }
        }
      }

      return states;
    },
    turnOn: function(states: BoxStates, boxNumber: number): BoxStates {
      states.setState(boxNumber, true);

      return states;
    },
    turnOff: function(states: BoxStates, boxNumber: number): BoxStates {
      states.setState(boxNumber, false);

      return states;
    },
    rotate: function(
      states: BoxStates,
      currentStates: BoxStates,
      boxNumberIn: number,
      boxNumberOut: number
    ): BoxStates {
      states.setState(boxNumberIn, currentStates.getState(boxNumberOut));

      return states;
    },
    checkFinished: function(currentStates: BoxStates) {
      if (
        currentStates.box1On &&
        currentStates.box2On &&
        currentStates.box3On &&
        currentStates.box4On &&
        currentStates.box5On
      ) {
        this.disableButtons = true;
        this.$emit("nextLevel");
      }
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
