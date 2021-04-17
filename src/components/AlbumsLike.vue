<template>
    <v-container >
        <h2 class="heading">Like photos</h2>
          <v-row>
              <v-card
                v-for="foto in likePhotos"
                :key="foto.id"
                class="mx-auto mb-10"
                max-width="300"
            >

            <v-img
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              :src="foto.url"
            >
              <v-card-title v-text="foto.title"></v-card-title>
            </v-img>
          </v-card>
          </v-row>
    </v-container>
</template>
<script>
export default {
  name: 'likeFotos',
  props: {
    likePhotos: {
    type: Array,
    default: [],
    },
  },
}
</script>
<style>
.heading {
    margin: 40px 0;
}
</style>