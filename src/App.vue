<template>
  <div id="app">
    <app-button @click="getData"
                :disabled="isLoading">
    </app-button>

    <div class="cards">

      <app-hero :hero="hero"
                :imageSrc="imageSrc"
                @click.native="openModal"
                class="card">
      </app-hero>

      <div class="details">
        <app-location :location="location"
                      class="card">
        </app-location>

        <app-episodes :episodes="episodes"
                      class="card">
        </app-episodes>
      </div>
    </div>

    <app-modal v-if="showModal && hero"
               :imageSrc="imageSrc"
               :heroName="hero.name"
               @closeModal="closeModal">
    </app-modal>
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
    data() {
      return {
        hero: null,
        imageSrc: '',
        location: null,
        episodes: null,
        locationUrl: '',
        episodesUrl: '',
        showModal: false,
        isLoading: false
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.isLoading = true;

        this.getHero().then(() => {
            this.getLocation(this.locationUrl).then(() => {
              this.isLoading = false;
            });
            this.getEpisodes(this.episodesUrl).then(() => {
              this.isLoading = false;
            });
          }
        )
      },
      getHero() {
        return fetch(`${this.$baseUrl}character/${Math.ceil(Math.random() * 492)}`)
          .then(res => res.json())
          .then(hero => {
            this.imageSrc = hero.image;
            this.locationUrl = hero.location.url;
            this.episodesUrl = hero.episode;

            this.hero = {
              name: hero.name,
              species: hero.species,
              gender: hero.gender,
              status: hero.status,
              type: hero.type
            };
          });
      },
      getLocation(url) {
        return fetch(url)
          .then(res => res.json())
          .then(location => {
            this.location = {
              name: location.name,
              type: location.type,
              dimension: location.dimension,
              population: location.residents.length
            }
          });
      },
      getEpisodes(urls) {
        const request = url => fetch(url).then(res => res.json()).then(res => res);
        const allRequests = Promise.all(urls.map(url => request(url)));

        return allRequests.then(episodes => {
          this.episodes = episodes.map(episode => {
            return {
              episode: episode.episode,
              name: episode.name
            }
          })
        });
      },
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
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
    padding: 24px 0;
    box-sizing: border-box;
    background: #999 url(https://www.transparenttextures.com/patterns/translucent-fibres.png);

    * {
      font-family: Helvetica, sans-serif;
      color: #2c3e50;
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
      margin: 16px;
      padding: 16px;
      border: 1px solid #bbb;
      border-radius: 8px;
      background-color: #ddd;
      box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
      box-sizing: border-box;

      .title {
        padding: 0 8px 16px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
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
        padding: 4px;
        box-sizing: border-box;
      }

      &__key {
        flex-basis: 40%;
        color: #777;
      }
    }
  }
</style>
