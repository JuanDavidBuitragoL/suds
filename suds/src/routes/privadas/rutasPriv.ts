import { Router} from 'express';
import ctrlUsuarios from '../../controller/usuarios/usuariosController';
import ctrlComponentes from '../../controller/componentes/componentesController';
import ctrlCriterios from '../../controller/criterios/criteriosController';
import ctrlProyectos from '../../controller/proyectos/proyectosController';
import ctrlResultados from '../../controller/resultados/resrultadosController';


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
        //Usuarios
        this.rutasAPI.get("/listarTodosUsu", ctrlUsuarios.ctrlListarTodosUsu);
        this.rutasAPI.post("/crearUsu", ctrlUsuarios.postUsuario);
        this.rutasAPI.delete("/eliminarUsu/:id", ctrlUsuarios.borrarUsuario);
        this.rutasAPI.put("/editarUsu/:id", ctrlUsuarios.updateUsuario);
        //Componentes
        this.rutasAPI.get("/listarTodosCom", ctrlComponentes.listarTodosCom);
        this.rutasAPI.post("/crearCom", ctrlComponentes.crearComponente);
        this.rutasAPI.delete("/eliminarCom/:id", ctrlComponentes.borrarComponente);
        this.rutasAPI.put("/editarCom/:id", ctrlComponentes.editarComponente);
        //Criterios
        this.rutasAPI.get("/listarTodosCri", ctrlCriterios.listarTodosCri);
        this.rutasAPI.post("/crearCri", ctrlCriterios.crearCriterio);
        this.rutasAPI.delete("/eliminarCri/:id", ctrlCriterios.borrarCriterio);
        this.rutasAPI.put("/editarCri/:id", ctrlCriterios.editarCriterio);
        //Proyectos
        this.rutasAPI.get("/listarTodosPro", ctrlProyectos.listarTodosPro);
        this.rutasAPI.post("/crearPro", ctrlProyectos.crearProyecto);
        this.rutasAPI.delete("/eliminarPro/:id", ctrlProyectos.borrarProyecto);
        this.rutasAPI.put("/editarPro/:id", ctrlProyectos.editarProyecto);
        //Resultados
        //this.rutasAPI.get("/listarTodosRes", ctrlProyectos.listarTodosPro);
        this.rutasAPI.post("/crearRes", ctrlResultados.crearResultado);
        this.rutasAPI.delete("/eliminarRes/:id", ctrlResultados.borrarResultado);
        this.rutasAPI.put("/editarRes/:id", ctrlResultados.editarResultado);
      
    }
}
const misRutas = new Rutas();
export default misRutas.rutasAPI;