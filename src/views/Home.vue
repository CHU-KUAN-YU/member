<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <b-button type="submit" variant="primary" class="mx-2" @click="singUp">登出</b-button>
    <div class="block">
      1
    </div>
    <div class="block">
      2
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    singUp(){
      localStorage.removeItem("flag");
      this.$router.push("/");
    }
  }
}
</script>


<style>
  .block{
    height: 100vh;
  }
</style>