<template>
  <h1 class=" mt-20 text-5xl text-red-600 pt-20">{{myData.itemQuality}}</h1>
  <h1 class=" mt-20 text-5xl text-red-600 pt-20">{{$route.params.id}}</h1>
   <router-view/>
</template>


<script>

import data from '../assets/data.json'
import Main from '../components/Main.vue'
export default {
         data() {
           return {
             myData: data
           }
         },

         components:{
           Main
         }
}
</script>

<style>

</style>