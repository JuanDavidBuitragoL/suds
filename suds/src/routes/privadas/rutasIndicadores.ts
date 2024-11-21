import { Router} from 'express';
import ctrlIndicadores from '../../controller/indicadores/indicadoresController';


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
        this.rutasAPI.get("/listarIndicadores", ctrlIndicadores.listarIndicadores);
        this.rutasAPI.post("/crearIndicador", ctrlIndicadores.crearIndicador);
        this.rutasAPI.delete("/eliminarIndicador/:id", ctrlIndicadores.borrarIndicador);
        this.rutasAPI.put("/editarIndicador/:id_indicador", ctrlIndicadores.updateIndicador);
      
    }
}
const misRutas = new Rutas();
export default misRutas.rutasAPI;