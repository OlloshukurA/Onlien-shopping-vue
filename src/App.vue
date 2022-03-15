<template>
 <div class="home  pt-5 bg-gray-50">
   <Navbar class=" fixed top-0"/>
   
   <Footer class="fixed bottom-0"/>
 </div>

 <router-view/>
</template>

<script>
// @ is an alias to /src

import Navbar from '../src/components/Navbar.vue'

import Footer from '../src/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
   
    Footer,
  }
}
</script>

<style>
   .same .active{
    background: #f02;
  }
</style>
