import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: [],
    albumsDetails: [],
  },
  mutations: {
    albumsList(state, response) {
      state.albums = response
    },
    albumsListDetails(state, response) {
      state.albumsDetails = response
    },
  },
  actions: {
    async getAlbumsList({ commit }) {
      const url = 'https://jsonplaceholder.typicode.com/albums';
      const fetchAlbums = await fetch(url);
      const json = await fetchAlbums.json();

      commit('albumsList', json)
    },
    async getAlbumsDetailsList({ commit }) {
      const url = 'https://jsonplaceholder.typicode.com/photos';
      const fetchAlbums = await fetch(url);
      const json = await fetchAlbums.json();

      commit('albumsListDetails', json);
    },
  },
})
