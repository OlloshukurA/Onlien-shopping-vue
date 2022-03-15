<template>
  <div class="navbar flex justify-between items-center w-full px-5 py-3 z-50 bg-white shadow-md">
      <div class=" "><MenuAlt2Icon class=" w-7"/></div>

      <div class="show" v-if="show">
          <input type="text" placeholder="Search here" class="border rounded px-4 py-1 outline-none">
      </div>

      <div>
          <SearchIcon class=" w-7" @click="showInput()" />
      </div>
  </div>
</template>

<script>

import { MenuAlt2Icon, SearchIcon, PlusIcon } from '@heroicons/vue/outline'
export default {
    components:{
        MenuAlt2Icon,
        SearchIcon
    },

    data() {
        return {
            show: false
        }
    },

    methods:{
        showInput(){
                this.show = true
        }
    },

}
</script>

<style>
    
</style>