<template>
  <section id="home-page" class="container">
    <button @click="logout" class="btn btn-danger" style="position: absolute; top: 10px; right: 10px;">logout</button>
    <div class="row justify-content-center mt-5 pt-5">
      <div class="col-4 mt-5">
        <img src="../assets/favorite.svg" alt="music" class="img-fluid mt-5">
      </div>
      <div class="col-6">
        <h4>
          <b>My Favorite Plants</b>
          <button @click="toHome" type="button" class="btn btn-pink float-right btn-sm text-light">Back Home</button>
        </h4>
        <ul class="list-unstyled">
          <li v-for="plant in favoritePlants" :key="plant.id" class="media d-flex align-items-center bg-white rounded p-2 shadow mt-3">
            <img :src="plant.plant.imgUrl" class="mr-3 rounded" alt="cover" width="100">
            <div class="media-body p-1">
              <button @click="deletePlant(plant.id)" type="button" class="close float-right" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="text-left">
                <h5 class="mt-0 mb-0 text-pink">{{ plant.plant.name }}</h5>
              </div>
              <div class="text-left mt-2">
                <span class="text-muted">{{ plant.plant.description }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    if (!localStorage.getItem('access_token')) {
      this.$router.push('/login')
    } else {
      this.$store.dispatch('fetchFavorite')
    }
  },
  computed: {
    favoritePlants () {
      return this.$store.state.favoritePlants
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    deletePlant (id) {
      this.$store.dispatch('deletePlant', id)
        .then(data => {
          this.$store.dispatch('fetchFavorite')
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style scoped>

</style>
