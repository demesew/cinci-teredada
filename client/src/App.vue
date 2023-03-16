<!-- client/src/App.vue -->
<template>
    <div id="app">
      <Auth />
    </div>
  </template>
  
  <script>
  import Auth from "./components/Auth.vue";
  
  export default {
    components: {
      Auth,
    },
  };
  </script>