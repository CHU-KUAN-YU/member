<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-button type="submit" variant="primary" class="mx-2" @click="singUp">登出</b-button>
  </div>
</template>


<script>

export default {
  name: 'about',
 
  methods:{
    singUp(){
      localStorage.removeItem("flag");
      this.$router.push("/");
    }
  }
}
</script>