<template>
    <div class="container">
        <h2>COMPONENTE DE CREAR PRODUCTO</h2>
        <div class="formulario">
            <div class="campos">
                <label for="codigoBarras">Codigo de Barras</label>
                <input type="text" v-model="producto.codigoBarras" id="codigoBarras">
                <label for="nombre">Nombre</label>
                <input type="text" v-model="producto.nombre" id="nombre">
                <label for="categoria">Categoria</label>
                <input type="text" v-model="producto.categoria" id="categoria">
                <label for="stock">Stock</label>
                <input type="number" v-model="producto.stock" id="stock">
                <label for="precio">Precio Unitario</label>
                <input type="number" v-model="producto.precio" id="precio">
                
            </div>
            <button @click="guardarProducto">Guardar</button>
        </div>
        <p v-if="mensaje">Se guardo el Producto</p>
    </div>
</template>

<script>
import {guardarProductoFacahda} from "../client/ProductoClient"
export default {
    data() {
        return {
            producto:{
                codigoBarras: "",
                nombre: "",
                categoria: "",
                stock: 0,
                precio: 0
            },
            mensaje: false
        }
    },
    methods:{
        async guardarProducto(){
            guardarProductoFacahda(this.producto)
            this.mensaje = true

            this.producto = {
                codigoBarras: "",
                nombre: "",
                categoria: "",
                stock: 0,
                precio: 0
            }

            setTimeout(() => {
                this.mensaje = false
            }, 3000);
        }
    }

}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.formulario{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    margin-top: 20px;
}
.campos{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    gap: 10px;
}
label{
    text-align: left;
}


</style>