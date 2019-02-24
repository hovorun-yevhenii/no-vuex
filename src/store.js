import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    showModal: false,
    imageSrc: '',
    locationUrl: '',
    episodesUrl: '',
    hero: null,
    location: null,
    episodes: null
  },
  getters: {
    getIsLoading: state => state.isLoading,
    getImageSrc: state => state.imageSrc,
    getLocation: state => state.location,
    getEpisodes: state => state.episodes,
    getHero: state => state.hero,
    getShowModal: state => state.showModal,
    getHeroName: state => state.hero.name
  },
  mutations: {
    TOGGLE_LOADER(state, isLoading) {
      state.isLoading = isLoading
    },
    TOGGLE_MODAL(state, showModal) {
      state.showModal = showModal
    },
    SET_IMAGE_SRC(state, imageSrc) {
      state.imageSrc = imageSrc
    },
    SET_LOCATION_URL(state, locationUrl) {
      state.locationUrl = locationUrl
    },
    SET_EPISODES_URL(state, episodesUrl) {
      state.episodesUrl = episodesUrl
    },
    SET_HERO(state, hero) {
      state.hero = hero
    },
    SET_LOCATION(state, location) {
      state.location = location
    },
    SET_EPISODES(state, episodes) {
      state.episodes = episodes
    }
  },
  actions: {
    getData({ commit, dispatch }, $baseUrl) {
      commit('TOGGLE_LOADER', true);

      dispatch('getHero', $baseUrl).then(() => {
        dispatch('getLocation').then(() => commit('TOGGLE_LOADER', false));
        dispatch('getEpisodes').then(() => commit('TOGGLE_LOADER', false));
        }
      )
    },
    getHero({ commit }, $baseUrl) {
      return fetch(`${$baseUrl}character/${Math.ceil(Math.random() * 492)}`)
        .then(res => res.json())
        .then(hero => {
          commit('SET_IMAGE_SRC', hero.image);
          commit('SET_LOCATION_URL', hero.location.url);
          commit('SET_EPISODES_URL', hero.episode);
          commit('SET_HERO', {
            name: hero.name,
            species: hero.species,
            gender: hero.gender,
            status: hero.status,
            type: hero.type
          });
        });
    },
    getLocation({ commit, state }) {
      return fetch(state.locationUrl)
        .then(res => res.json())
        .then(location => {
          commit('SET_LOCATION', {
            name: location.name,
            type: location.type,
            dimension: location.dimension,
            population: location.residents.length
          });
        });
    },
    getEpisodes({ commit, state }) {
      const urls = state.episodesUrl;
      const request = url => fetch(url).then(res => res.json()).then(res => res);
      const allRequests = Promise.all(urls.map(url => request(url)));

      return allRequests.then(data => {
        const episodes = data.map(episode => {
          return {
            episode: episode.episode,
            name: episode.name
          }
        });

        commit('SET_EPISODES', episodes)
      });
    },
  }
})
