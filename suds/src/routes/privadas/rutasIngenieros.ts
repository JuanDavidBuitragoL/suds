import { Router} from 'express';
import ctrlIngenieros from '../../controller/ingenieros/ingenierosController';


class Rutas{
    public rutasAPI: Router;

    constructor(){
        this.rutasAPI = Router();
        this.config();
    }

    public config (){
        this.rutas();
    }

    public rutas (){
        this.rutasAPI.get("/listarIngenieros", ctrlIngenieros.listarIngenieros);
        this.rutasAPI.post("/crearIngeniero", ctrlIngenieros.crearIngeniero);
        this.rutasAPI.delete("/eliminarIngeniero/:id", ctrlIngenieros.borrarIngeniero);
        this.rutasAPI.put("/editarIngeniero/:id_ingeniero", ctrlIngenieros.updateIngeniero);
      
    }
}
const misRutas = new Rutas();
export default misRutas.rutasAPI;