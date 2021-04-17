<template>
  <v-app>
      <router-view />
  </v-app>
</template>

<script>


export default {
  name: 'App',
  mounted() {
    const local = localStorage.getItem('user')
    if(!local) {
      this.$router.push('/login')
    } else {
      this.$router.push('/')
    }
    
  }
};
</script>
