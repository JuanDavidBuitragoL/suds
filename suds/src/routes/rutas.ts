import { Router } from "express";
import accesoControladorVerificar from '../controller/acceso/accesoControladorVerificar';
import ctrlUsuarios from "../controller/usuarios/usuariosController";

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
    this.rutasAPI.get("/listarTodosUsu", ctrlUsuarios.ctrlListarTodosUsu);
  }
}
const misRutas = new Rutas();
export default misRutas.rutasAPI;
