<template>
  <div class="main pb-10">
      <div class="title flex justify-between items-center py-5">
          <h1 class=" font-bold text-2xl">New Men's</h1>
          <span class=" text-gray-400 font-medium cursor-pointer">See All</span>
      </div>

      <router-link :to="'/lifestyle/' + post" > 
      
          <div class="items grid grid-cols-2 gap-5 pb-10">
              <div class="item " :for="(post) in posts">
                   <h1>{{post.id}}</h1>
              <div class=" w-full bg-white h-auto rounded-lg shadow-sm ">
                  <div class=" cursor-pointer"><img :src="post.itemImg" alt="" class="rounded-lg"></div>

                  <p class=" text-yellow-300 font-medium px-2 py-1">{{post.userGemder}} {{post.itemType}}</p>
                  <p class=" text-gray-900 font-bold px-2">{{post.itemBrand}}</p>

                  <div class="flex  pt-2 justify-between">
                      <span class="text-gray-900 font-bold pl-2">{{post.itemPrice}}</span>
                      <span class=" cursor-pointer plus w-8 h-8 flex items-center justify-center bg-gray-900 rounded-lg  rounded-r-none"><PlusIcon class=" text-white  w-5 h-5"/></span>
                  </div>
              </div>
          </div>
          </div>

       


          
      </router-link>
  </div>
   <router-view/>
</template>

<script>
import data from '@/assets/data.json'
import {  PlusIcon } from '@heroicons/vue/outline'
export default {

    components:{
        PlusIcon
    },


    data() {
        return {
            posts: data
        }
    },

}
</script>

<style>
.plus{
    margin-left: 78px;
    cursor: pointer;
}
</style>