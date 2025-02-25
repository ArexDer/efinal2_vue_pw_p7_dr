import axios from "axios";

//metod de guardado
// URL: http://localhost:8081/facturacion/v1.1/productos

const guardarProducto = async (producto) => {
  const data = await axios.post("http://localhost:8081/facturacion/v1.1/productos", producto).then(r=>r.data);
    return data;
}

//METODO FACHADA
export const guardarProductoFacahda = async (producto) => {
    
      return guardarProducto(producto);
  }