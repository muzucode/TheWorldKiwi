<template>
<div class="main">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/verify">Verify</router-link> |
    <router-link to="/signin">Sign In</router-link> |
    <router-link @click="signOut" to="/signout">Sign Out</router-link>
    <button @click="currentSession">Session</button>

  </div>
  <router-view/>
</div>
</template>

<script>
import AmplifyAuthService from './services/AmplifyAuthService.js';

export default {
  name: "App",
  data: function () {
    return {
      signedin: Boolean,
      userid: ''
    }
  },
  methods: {
    signOut: function () {
      AmplifyAuthService.signOut();
    },
    currentSession: function (){
      AmplifyAuthService.currentSession();
    }
  }
}
</script>

<style>
.main{

}
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
</style>
