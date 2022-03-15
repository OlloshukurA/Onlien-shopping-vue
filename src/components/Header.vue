<template>
  <div class="header h-auto">
      <div class="intro w-full h-52  rounded-3xl my-10 relative">
          <div class="rounded-3xl absolute w-full h-48"><img src="@/assets/img/1.jpg" alt="" class=" rounded-3xl h-56 w-full"></div>
          <div class=" relative z-10 rounded-3xl w-full h-auto p-5">
              <h4 class=" font-medium text-white">New Release</h4>
              <h1 class=" font-bold text-2xl text-white my-2">Nike Air <br> Max 90</h1>
              <button class=" w-36 h-8 bg-white rounded-2xl mt-2 font-medium hover:text-white hover:bg-red-500">Shop Now</button>
          </div>
      </div>

       <div class="slide  overflow-x-auto  flex w-auto pt-5 " >
             <router-link to="/lifestyle" class=" ">
                
                    <div class="border flex items-center rounded-full pr-16 mr-2 hover:bg-yellow-300">
                 <img src="@/assets/img/1.jpg" alt="" class="w-12 h-12 rounded-full">

                 <span class=" font-medium ml-4">Lifestyle</span>
             </div>
             </router-link>
          </div>

          
  </div>
</template>

<script>
import data from "../assets/data.json"
export default {
    data() {
        return {
            posts: data
        }
    },

    // computed:{
    //     postId(){
    //         return parseInt(this.$route.params.id)
    //     },

    //     post(){
    //         return data.find(post => post.id === this.postId)
    //     }
    // }
}
</script>

<style>
   .slide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.slide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>