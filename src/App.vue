<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <router-view ref="allevent"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{

    }
  },
  created(){

  },

  
  mounted(){
    this.$refs.allevent




    // debugger
  },
  methods:{
    test(){

    }

  }
}
</script>

<style>

</style>
