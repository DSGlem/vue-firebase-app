<template>
  <div class="leadboard">
    leadboard
    <div class="leadboard__item">
      <div>Rank</div>
      <div>Username</div>
      <div>Score</div>
    </div>
    <div class="leadboard__item" v-for="item in leadboard" :key="item.email">
      <div>{{ count++ }}</div>
      <div>{{ item.email }}</div>
      <div>{{ item.score }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    leadboard: null,
  }),
  methods: {
    async getScore() {
      this.leadboard = await this.$store.dispatch("getLeadboard");
    },
  },
  mounted() {
    this.getScore();
  },
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
