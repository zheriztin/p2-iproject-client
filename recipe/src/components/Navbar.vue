<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <h5 class="nav-link text-danger" > {{status}}</h5>
        <router-link  class="nav-link text-black"  to="/" tabindex="-1" aria-disabled="true" > Home </router-link>
        <router-link  class="nav-link text-black" v-if="isLoggedIn === false" to="/register"  tabindex="-1" aria-disabled="true" > Register </router-link>
        <router-link  class="nav-link text-black" v-if="isLoggedIn === true" to="/favourites" tabindex="-1" aria-disabled="true"> Favourite </router-link>
        <router-link  class="nav-link text-black" v-if="isLoggedIn === false" to="/login"  tabindex="-1" aria-disabled="true" > Login </router-link>
        <router-link  class="nav-link text-black" v-if="isLoggedIn === true && status !== 'Premium'" to="/subscribe" tabindex="-1" aria-disabled="true"> Subscribe </router-link>
        <a class="nav-link text-black"  tabindex="-1" v-if="isLoggedIn === true" aria-disabled="true"  @click="logout">Logout</a>
      </ul>
      <form class="d-flex" @submit.prevent="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchTerm">
        <button class="btn btn-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {

name: "Navbar",
data () {
  return {
      isLoggedIn: !!localStorage.access_token,
      searchTerm:"",
      status: localStorage.status  || "Guest",
    }
},
  methods : {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    search() {
      this.$router.push({path: '/search', query:{searchTerm: this.searchTerm}})
    }

  }
}
</script>

<style scoped>
.navbar {
  background-color: coral;
}

</style>