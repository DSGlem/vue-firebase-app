<template>
  <div class="leaderboard">
    leaderboard
    <div class="leaderboard__item">
      <div>Rank</div>
      <div>Username</div>
      <div>Score</div>
    </div>
    <div
      class="leaderboard__item"
      v-for="(item, index) in leaderboard"
      :key="item.email"
    >
      <div>{{ index }}</div>
      <div>{{ item.email }}</div>
      <div>{{ item.score }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    leaderboard: null
  }),
  methods: {
    async getScore() {
      const leaderboard = await this.$store.dispatch("getLeaderboard");

      console.log(typeof leaderboard);

      const leaderboardArray = Object.keys(leaderboard).map(
        i => leaderboard[i]
      );
      leaderboardArray.sort(function(a, b) {
        return a.score - b.score;
      });
      this.leaderboard = leaderboardArray;
      // const data = await this.$store.dispatch("getLeaderboard");
      // const items = Object.entries(data).map(entry => ({
      //   ...entry[1],
      //   id: entry[0]
      // }));

      // this.leaderboard = items; // but i would rename this.leaderboard to this.items
    }
  },
  mounted() {
    this.getScore();
  }
};
</script>
<style lang="scss" scoped>
.leaderboard {
  color: white;
}
.leaderboard__item {
  display: grid;
  grid-template: 1fr / auto 1fr auto;
  grid-gap: 2rem;
}
.result {
  font-size: 2rem;
}
</style>
