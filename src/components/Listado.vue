<template>
    <div class="container">
        <h2>COMPONENTE LISTADO DE LISTADO</h2>
        <div class="datos">
            <div class="camp1">
                <label for="codigoBarras">Codigo de Barras</label>
            <input type="text" id="codigoBarras">
            </div>
            <div class="camp2">
                <label for="cantidad">Cantidad</label>
            <input type="text" id="cantidad">

            </div>

            <div class="camp3">
            <button>AGREGAR </button>
        </div>
        <div class="tabla">
            <table>
            <thead>
                <tr>
                    <th>C. Barras</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Sub. Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>ff1</th>
                    <th>Sopa</th>
                    <th>2</th>
                    <th>1.05</th>
                    <th>2.10</th>
                </tr>
            </tbody>
        </table>
       
        </div>
            
            
        </div>
       
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}

.datos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 5px;
    gap: 10px;
    
}
.camp1, .camp2{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 10px;
}

.tabla{
  
    display: flex;
   
   
    align-content: center;
    
    
}


</style>