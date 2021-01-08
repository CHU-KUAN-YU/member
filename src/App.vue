<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  &::-webkit-scrollbar-button {
    background: #aaa;
  }
  &::-webkit-scrollbar-thumb{
    background:rgba(black,.16);
  }
  // &::-webkit-scrollbar-track-piece {
  //     background: #888;
  // }
  // &::-webkit-scrollbar-thumb {
  //     background: #eee;
  // }​
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
