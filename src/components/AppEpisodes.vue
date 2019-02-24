<template>
  <div class="episodes">
    <div class="title">{{ heading }}</div>

    <div v-for="episode in episodes"
         :key="episode.episode"
         class="info">

      <div class="info__key">{{ episode.episode }}</div>
      <div class="info__value">{{ episode.name }}</div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppEpisodes',
    computed: {
      episodes() {
        return this.$store.getters.getEpisodes
      },
      heading() {
        return `Episode${this.episodes && this.episodes.length > 1 ? "s" : ""}`;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .episodes {
    max-height: 320px;
    overflow-y: auto;
  }
</style>
