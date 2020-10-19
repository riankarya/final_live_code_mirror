<template>
  <section id="home-page" class="container">
        <button @click="logout" class="btn btn-danger" style="position: absolute; top: 10px; right: 10px;">logout</button>
        <div class="row justify-content-center mt-5 pt-5">
        <div class="col-4 mt-5">
            <img src="../assets/home.svg" alt="music" class="img-fluid mt-5">
        </div>
        <div class="col-6">
            <h4>
            <b>Hacktiv Garden</b>
            <button @click="goToFavorite" type="button" class="btn btn-pink float-right btn-sm text-light">My Favorite Plant</button>
            </h4>
            <ul class="list-unstyled">
            <li v-for="plant in plants" :key="plant.id" class="media d-flex align-items-center bg-white rounded p-2 shadow mt-3">
                <img :src="plant.imgUrl" class="mr-3 rounded" alt="cover" width="100">
                <div class="media-body p-1">
                <div class="text-left">
                  <h5 class="mt-0 mb-0 text-pink">{{ plant.name }}</h5>
                </div>
                <div class="text-left mt-2">
                    <span class="text-muted">{{ plant.description }}</span>
                    <button @click="addFavorite(plant.id)" class="mt-2 btn btn-pink float-right p-2 rounded text-light shadow" style="font-size:10px">Add To Favorite</button>
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
      this.$store.dispatch('fetchPlants')
    }
  },
  computed: {
    plants () {
      return this.$store.state.plants
    }
  },
  methods: {
    addFavorite (id) {
      this.$store.dispatch('addFavorite', id)
    },
    goToFavorite () {
      this.$router.push('/favorite')
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
