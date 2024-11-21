import { Router } from "express";
import accesoControladorVerificar from '../controller/acceso/accesoControladorVerificar';
import ctrlUsuarios from "../controller/usuarios/usuariosController";
import ctrlComponentes from "../controller/componentes/componentesController";
import ctrlCriterios from "../controller/criterios/criteriosController";
import ctrlProyectos from "../controller/proyectos/proyectosController";
import ctrlResultados from "../controller/resultados/resrultadosController";

class Rutas {
  public rutasAPI: Router;

  constructor() {
    this.rutasAPI = Router();
    //TODO:
    //cargar el inicio de la configuracion de rutas
    this.config();
  }

  public config() {
    this.rutas();
  }

  public rutas() {
    this.rutasAPI.post("/login",accesoControladorVerificar.verificarUsuario);
    this.rutasAPI.get("/listarTodosCom", ctrlComponentes.listarTodosCom);
    this.rutasAPI.get("/listarTodosCri", ctrlCriterios.listarTodosCri);
    this.rutasAPI.get("/listarTodosPro", ctrlProyectos.listarTodosPro);
    this.rutasAPI.get("/listarTodosRes", ctrlResultados.listarTodosRes);
    
  }
}
const misRutas = new Rutas();
export default misRutas.rutasAPI;
