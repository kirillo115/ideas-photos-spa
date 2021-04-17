<template>
  <v-container>
     <div class="text-center d-flex align-center justify-space-around">
       <v-spacer></v-spacer>
       <v-tooltip bottom>

        <template v-slot:activator="{ on, attrs }">

        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="clearLocalStorage"
        >
          Exit
        </v-btn>
      </template>
      <span>Вы покидаете этот Клондайк фотографий??)))</span>
     </v-tooltip>
   </div>

    <Albums/>

    <AlbumsDetails
    @addLikePhotos="addLikePhotos"
    />

    <AlbumsLike
      :like-photos="likePhotos"
    />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Albums from '../components/Albums'
import AlbumsDetails from '../components/AlbumsDetails'
import AlbumsLike from '../components/AlbumsLike'

export default {
  name: 'Home',
  components: {
    Albums,
    AlbumsDetails,
    AlbumsLike,
  },
  data: () => ({
    likePhotos: [],
  }),
  computed: {
    ...mapState(['albums'])
  },
  async mounted() {
    await this.$store.dispatch('getAlbumsList');
  },
  methods: {
    addLikePhotos(event, photo) {
      this.likePhotos.push(photo);

      const btn = event.target.closest('.v-btn');
      btn.disabled = true;
      event.target.style.color = 'red'
    },
    clearLocalStorage() {
    localStorage.clear();
    this.$router.push('/login');
   }
  },
}
</script>
