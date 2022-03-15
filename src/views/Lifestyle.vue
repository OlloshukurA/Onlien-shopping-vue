<template>
  <div>
    <div class="home px-5 pt-5 bg-gray-50">
      <Header/>
      <Main/>
  </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
export default {
   components:{
        Header,
        Main,
   }
   
}
</script>

<style>

</style>