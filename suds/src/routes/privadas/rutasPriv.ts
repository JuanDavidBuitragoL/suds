import { Router} from 'express';
import ctrlUsuarios from '../../controller/usuarios/usuariosController';


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
        this.rutasAPI.get("/listarTodosUsu", ctrlUsuarios.ctrlListarTodosUsu);
        this.rutasAPI.post("/crearUsu", ctrlUsuarios.postUsuario);
        this.rutasAPI.delete("/eliminarUsu/:id", ctrlUsuarios.borrarUsuario);
        this.rutasAPI.put("/editarUsu/:id", ctrlUsuarios.updateUsuario);
      
    }
}
const misRutas = new Rutas();
export default misRutas.rutasAPI;