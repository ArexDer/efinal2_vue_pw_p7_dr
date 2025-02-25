<template>
  <div>
    <h2>PAGINA DE VENTA Y LSITADO</h2>
    <NumeroVenta />
    <Listado />
  </div>
    
</template>

<script>
import NumeroVenta from '@/components/NumeroVenta.vue';
import Listado from '@/components/Listado.vue';
export default {
    components: {
        NumeroVenta,
        Listado
    }

}
</script>

<style>

</style>