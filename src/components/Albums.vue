<template>
    <v-container>
      <h2 class="heading">All Albums</h2>

      <div class="flex">

        <v-card
          v-for="photo in albumsTitle[page - 1]"
          :key="photo.id"
          elevation="10"
          class="mt-5 mr-5"
          max-width="344"
        >

      <v-card-subtitle>{{photo.id}}</v-card-subtitle>

        <v-card-title
      > {{ photo.title }}</v-card-title>
      </v-card>
      </div>

      <v-divider></v-divider>
      <div class="text-center mt-30">

        <v-pagination
        v-model="page"
        :length="lengthPagination"
        ></v-pagination>
      </div>
    </v-container>
</template>

<script>
import {mapState} from 'vuex'


export default {
  name: 'albums',
  data: () => ({
      page: 1,
      lengthPagination: 0,
  }),
  computed: {
    ...mapState(['albums']),
    albumsTitle() {
      const albumsSplice = [];
      this.lengthPagination = Math.ceil(this.albums.length / 9);

      const allAlbums = [...this.albums];

      while(albumsSplice.length <= this.lengthPagination) {
        let countAlbum = allAlbums.splice(0,9);
        albumsSplice.push(countAlbum);
      }
      
      return albumsSplice;
    }
  },
  mounted() {
    this.$store.dispatch('getAlbumsList');
  },
}
</script>

<style scoped>
.flex {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 50px;
    align-items: center;
}

</style>