<template>
    <div class="container">
        <h2>Componente NUMERO DE VENTA</h2>
        <div class="campos">
            <div class="camposIZQ">
                <label for="numVenta">Numero de Venta</label>
                <input type="text" id="numVenta">
                <label for="cedula">Cedula</label>
                <input type="text" id="cedula">
            </div>
            <div class="camposDER">
                <button @click="guardarVenta">GUARDAR</button>
            </div>
        </div>
        <p v-if="mensaje">Se guardo la VENTA</p>
    </div>
</template>

<script>
import {guardarVentaFachada} from "../client/VentaClient"
export default {
    data() {
        return {
            venta:{
                numVenta: "",
                cedula: ""
            },
            mensaje: false
        }
    },

    methods:{
        async guardarVenta(){
            guardarVentaFachada(this.venta)
            this.mensaje = true

            this.venta = {
                numVenta: "",
                cedula: ""
            }

            setTimeout(() => {
                this.mensaje = false
            }, 3000);
        }
    }

}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}

.campos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
}
.camposIZQ{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 10px;
}

.campos label {
    flex: 1;
    text-align: left;
}

.campos button {
    flex: 1;
    text-align: right;
}
</style>