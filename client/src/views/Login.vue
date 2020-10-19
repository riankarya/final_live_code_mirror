<template>
  <section class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-4">
        <div class="shadow-lg p-5 mb-5 bg-white rounded">
          <div class="mb-5">
            <img src="../assets/login.svg" alt="music" class="img-fluid" />
          </div>
          <h5 class="mb-4"><b>Welcome to Hacktiv Garden</b></h5>
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="login-email">Email address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="login-email"
                placeholder="Your email"
              />
            </div>
            <div class="form-group">
              <label for="login-password">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="login-password"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-pink btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = { email: this.email, password: this.password }
      this.$store.dispatch('login', payload)
        .then(data => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
</style>
