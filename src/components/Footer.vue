<template>
   <div id="footer" class=" flex justify-between items-center w-full px-5 py-3 z-50 bg-white shadow-md border">
    <router-link to="/"><div class="same w-8 h-8  p-1 rounded"><HomeIcon class=""/></div></router-link> 
    <router-link to="/bag"><div class="same w-8 h-8  p-1 rounded"><ShoppingBagIcon class=""/></div></router-link> 
    <router-link to="/save"><div class="same w-8 h-8  p-1 rounded"><SaveIcon class=""/></div></router-link> 
    <router-link to="/bell"><div class="same w-8 h-8  p-1 rounded"><BellIcon class=""/></div></router-link> 
    
  </div>
</template>

<script>
import { HomeIcon, ShoppingBagIcon, SaveIcon, BellIcon } from '@heroicons/vue/outline'
export default {
  components:{
    HomeIcon,
    ShoppingBagIcon,
    SaveIcon,
    BellIcon
  }
}
</script>

<style>
  #footer{
      -webkit-box-shadow: 2px -5px 4px -3px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 2px -5px 4px -3px rgba(34, 60, 80, 0.2);
box-shadow: 2px -5px 4px -3px rgba(34, 60, 80, 0.2);
  }

  .same .active{
    background: #f02;
  }
</style>