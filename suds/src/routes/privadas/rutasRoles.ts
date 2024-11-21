import { Router} from 'express';
import rolesController from '../../controller/roles/rolesController';


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
        this.rutasAPI.get("/listarRoles", rolesController.listarRoles);
        this.rutasAPI.post("/crearRol", rolesController.crearRol);
        this.rutasAPI.delete("/eliminarRol/:id", rolesController.borrarRol);
        this.rutasAPI.put("/editarRol/:id_rol", rolesController.updateRol);
      
    }
}
const misRutas = new Rutas();
export default misRutas.rutasAPI;