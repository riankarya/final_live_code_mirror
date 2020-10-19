<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
* {
        font-family: 'Alata';
    }
    .btn-pink {
        background-color: #f2a4c9 !important;
    }
    .bg-pink {
        background-color: rgba(242, 164, 201, .5);
    }
    .text-pink {
        color: #f2a4c9 !important;
        font-weight: bold;
    }
</style>
