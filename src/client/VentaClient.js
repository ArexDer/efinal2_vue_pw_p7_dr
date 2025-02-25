import axios from "axios";

const guardarVenta = async (venta) => {
    const data = await axios.post("http://localhost:8081/facturacion/v1.1/ventas/", venta).then(r=>r.data);
        return data;
    }

  export  const guardarVentaFachada = async (venta) => {
        
            return  await guardarVenta(venta);
        }
