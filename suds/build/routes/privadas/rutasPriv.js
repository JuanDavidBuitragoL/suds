"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = __importDefault(require("../../controller/usuarios/usuariosController"));
const componentesController_1 = __importDefault(require("../../controller/componentes/componentesController"));
const criteriosController_1 = __importDefault(require("../../controller/criterios/criteriosController"));
const proyectosController_1 = __importDefault(require("../../controller/proyectos/proyectosController"));
const resrultadosController_1 = __importDefault(require("../../controller/resultados/resrultadosController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        //Usuarios
        this.rutasAPI.get("/listarTodosUsu", usuariosController_1.default.ctrlListarTodosUsu);
        this.rutasAPI.post("/crearUsu", usuariosController_1.default.postUsuario);
        this.rutasAPI.delete("/eliminarUsu/:id", usuariosController_1.default.borrarUsuario);
        this.rutasAPI.put("/editarUsu/:id", usuariosController_1.default.updateUsuario);
        //Componentes
        this.rutasAPI.get("/listarTodosCom", componentesController_1.default.listarTodosCom);
        this.rutasAPI.post("/crearCom", componentesController_1.default.crearComponente);
        this.rutasAPI.delete("/eliminarCom/:id", componentesController_1.default.borrarComponente);
        this.rutasAPI.put("/editarCom/:id", componentesController_1.default.editarComponente);
        //Criterios
        this.rutasAPI.get("/listarTodosCri", criteriosController_1.default.listarTodosCri);
        this.rutasAPI.post("/crearCri", criteriosController_1.default.crearCriterio);
        this.rutasAPI.delete("/eliminarCri/:id", criteriosController_1.default.borrarCriterio);
        this.rutasAPI.put("/editarCri/:id", criteriosController_1.default.editarCriterio);
        //Proyectos
        this.rutasAPI.get("/listarTodosPro", proyectosController_1.default.listarTodosPro);
        this.rutasAPI.post("/crearPro", proyectosController_1.default.crearProyecto);
        this.rutasAPI.delete("/eliminarPro/:id", proyectosController_1.default.borrarProyecto);
        this.rutasAPI.put("/editarPro/:id", proyectosController_1.default.editarProyecto);
        this.rutasAPI.get("/listarComponentes/:id", proyectosController_1.default.listarId);
        //Resultados
        this.rutasAPI.get("/listarTodosRes", resrultadosController_1.default.listarTodosRes);
        this.rutasAPI.post("/crearRes", resrultadosController_1.default.crearResultado);
        this.rutasAPI.delete("/eliminarRes/:id", resrultadosController_1.default.borrarResultado);
        this.rutasAPI.put("/editarRes/:id", resrultadosController_1.default.editarResultado);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasPriv.js.map