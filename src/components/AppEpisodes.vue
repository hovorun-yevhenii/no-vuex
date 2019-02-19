<template>
  <div>
    <div class="title">{{ heading }}</div>

    <div v-for="episode in episodes" :key="episode.episode" class="info">
      <div class="info__key">{{ episode.episode }}</div>
      <div class="info__value">{{ episode.name }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppEpisodes',
    props: {
      episodes: Array
    },
    computed: {
      heading() {
        return `Episode${this.episodes && this.episodes.length > 1 ? "s" : ""}`;
      }
    }
  }
</script>
