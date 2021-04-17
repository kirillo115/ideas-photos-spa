<template>
    <v-container fluid>
        <h2 class="heading">All Photos</h2>
        <v-row dense>

          <v-card
            class="mx-auto mb-10"
            max-width="300"
            v-for="photo in albumsDetailsPhotos[page - 1]"
            :key="photo.id">

            <v-img
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              :src="photo.url"
            >
              <v-card-title v-text="photo.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn 
              @click="$emit('addLikePhotos', $event, photo)"
              icon>

                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-row>
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
import { mapState } from 'vuex'


export default {
  name: 'albums-details',
  data: () => ({
      page: 1,
      lengthPagination: 0,
  }),
  computed: {
    ...mapState(['albumsDetails']),
    albumsDetailsPhotos() {
      const albumsSplice = [];
      this.lengthPagination = Math.ceil(this.albumsDetails.length / 9);
      
      const allAlbums = [...this.albumsDetails];

      while(albumsSplice.length <= this.lengthPagination) {
        let countAlbum = allAlbums.splice(0,9);
        albumsSplice.push(countAlbum)
      }

      return albumsSplice;
    }
  },
  mounted() {
    this.$store.dispatch('getAlbumsDetailsList');
  },
}
</script>