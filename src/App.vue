<template>
  
  <ProductoPage />
  <ListadoPagina />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductoPage from './pages/ProductoPage.vue';
import ListadoPagina from './pages/ListadoPagina.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductoPage,
    ListadoPagina
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
