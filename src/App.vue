<template>
  <div id="app">
    <app-button></app-button>
    <div class="cards">
      <app-hero @click.native="openModal" class="card"></app-hero>
      <div class="details">
        <app-location class="card"></app-location>
        <app-episodes class="card"></app-episodes>
      </div>
    </div>
    <app-modal></app-modal>
  </div>
</template>

<script>
  import AppHero from './components/AppHero'
  import AppLocation from './components/AppLocation'
  import AppEpisodes from './components/AppEpisodes'
  import AppButton from './components/AppButton'
  import AppModal from './components/AppModal'

  export default {
    name: 'app',
    components: {
      AppHero,
      AppLocation,
      AppEpisodes,
      AppButton,
      AppModal
    },
    created() {
      this.$store.dispatch('getData', this.$baseUrl)
    },
    methods: {
      openModal() {
        this.$store.commit('TOGGLE_MODAL', true)
      }
    }
  }
</script>

<style lang="scss">
  html, body, p {
    padding: 0;
    margin: 0;
    font: inherit;
  }

  [id="app"] {
    min-height: 100vh;
    padding: 16px 0;
    box-sizing: border-box;
    background: #222;

    * {
      font-family: Helvetica, sans-serif;
      color: #222;
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center;
    }

    .card {
      width: 296px;
      min-width: 296px;
      margin: 16px 8px;
      padding: 16px;
      border: 2px solid #ddd;
      background-color: #ddd;
      box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
      box-sizing: border-box;

      .title {
        padding: 8px 0;
        margin: -16px -16px 16px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: #ddd;
        background-color: #222;
      }
    }

    .info + .info {
      border-top: 1px solid #bbb;
    }

    .info {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      &__key,
      &__value {
        flex-basis: 60%;
        padding: 8px 4px;
        box-sizing: border-box;
      }

      &__key {
        flex-basis: 40%;
        color: #555;
      }
    }
  }
</style>
