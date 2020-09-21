<template>
  <div class="interactive-element">
    <div
      class="challenge__interactive-element"
      :class="{ done: clicked }"
      v-if="challenge"
      @click="clickTime"
    >
      <span class="result" v-show="clicked">Your score {{ this.score }}!</span>
    </div>
    <button v-if="!challenge" @click="start">start</button>
    <button v-if="clicked" @click="reset">reset</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    challenge: false,
    clicked: false,
    bestScore: null,
    score: 0,
    startTime: 0,
    endTime: 0,
  }),
  methods: {
    async saveScore() {
      await this.$store.dispatch("saveScore", this.bestScore);
    },
    reset() {
      this.challenge = false;
      this.startTime = 0;
      this.endTime = 0;
      this.clicked = false;
    },
    getRandomTime(min, max) {
      return Math.round(Math.random() * max + min);
    },
    start() {
      const time = this.getRandomTime(1, 10) * 1000;
      console.log(time);
      setTimeout(() => {
        this.challenge = true;
        this.startTime = new Date();
      }, time);
    },
    clickTime() {
      if (!this.clicked) {
        this.endTime = new Date();
        this.score = this.endTime - this.startTime;
        console.log("ff");
        console.log(this.bestScore);
        console.log(this.score);
        if (this.bestScore > this.score || this.bestScore === null) {
          console.log("1");
          console.log(this.score);

          this.bestScore = this.score;
          this.saveScore();
        }
        this.clicked = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.challenge__interactive-element {
  width: 53.5vw;
  height: 56.8vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.done {
  background-color: green;
}
.result {
  font-size: 2rem;
}
</style>
