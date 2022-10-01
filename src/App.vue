
<template>
 
 <div class="wrapper">
      
      <TheNavbar/>
      <TheSidevar/>
     

      <!-- Main Content -->
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
      
      <TheFooter />

    </div>

</template>


<script>
  import TheSidevar from './views/TheSidebar.vue'
  import TheNavbar from './views/TheNavbar.vue'
  import TheFooter from './views/TheFooter.vue'
  
  export default {
    components:{
      TheSidevar,
      TheNavbar,
      TheFooter
    }
  }
</script>