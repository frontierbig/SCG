<template>
    <v-app class="body">
      <Header ></Header>
      <Body></Body>
    </v-app>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Body from '../components/Body.vue';
  export default {
    components: { Header,Body},
  
  }
  </script>
  
  <style>
  .body{
    width: 100%;
  }
  </style>