<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { GlobalStyle } from './components/styles/Global.styled'


import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Loader from './components/Loader.vue'

</script>

<template>
  <div>
      <Loader/>
      <GlobalStyle/>
      <Navbar/>
  </div>

</template>


