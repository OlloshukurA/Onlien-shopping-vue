<template>
 <div class="home px-5 pt-5 bg-gray-50">
   <Header/>
 </div>
</template>

<script>
// @ is an alias to /src

import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Main,
  }
}
</script>
