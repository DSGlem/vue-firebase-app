<template>
  <div class="leadboard">
    leadboard
    <div class="leadboard__item">
      <div>Rank</div>
      <div>Username</div>
      <div>Score</div>
    </div>
    <div
      class="leadboard__item"
      v-for="(item, index) in leadboard"
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
    leadboard: null
  }),
  methods: {
    async getScore() {
      const leadboard = await this.$store.dispatch("getLeadboard");

      console.log(typeof leadboard);

      const leaderboardArray = Object.keys(leadboard).map(i => leadboard[i]);
      leaderboardArray.sort(function(a, b) {
        return a.score - b.score;
      });
      this.leadboard = leaderboardArray;
      // const data = await this.$store.dispatch("getLeadboard");
      // const items = Object.entries(data).map(entry => ({
      //   ...entry[1],
      //   id: entry[0]
      // }));

      // this.leadboard = items; // but i would rename this.leaderboard to this.items
    }
  },
  mounted() {
    this.getScore();
  }
};
</script>
<style lang="scss" scoped>
.leadboard {
  color: white;
}
.leadboard__item {
  display: grid;
  grid-template: 1fr / auto 1fr auto;
  grid-gap: 2rem;
}
.result {
  font-size: 2rem;
}
</style>
