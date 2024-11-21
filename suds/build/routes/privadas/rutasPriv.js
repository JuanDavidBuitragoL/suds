"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = __importDefault(require("../../controller/usuarios/usuariosController"));
const componentesController_1 = __importDefault(require("../../controller/componentes/componentesController"));
const criteriosController_1 = __importDefault(require("../../controller/criterios/criteriosController"));
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
        //this.rutasAPI.get("/listarTodosCom", ctrlComponentes.ctrlListarTodosCom);
        this.rutasAPI.post("/crearCom", componentesController_1.default.crearComponente);
        this.rutasAPI.delete("/eliminarCom/:id", componentesController_1.default.borrarComponente);
        this.rutasAPI.put("/editarCom/:id", componentesController_1.default.editarComponente);
        //Criterios
        //this.rutasAPI.get("/listarTodosCri", ctrlCriterios.listarTodosCri);
        this.rutasAPI.post("/crearCri", criteriosController_1.default.crearCriterio);
        this.rutasAPI.delete("/eliminarCri/:id", criteriosController_1.default.borrarCriterio);
        this.rutasAPI.put("/editarCri/:id", criteriosController_1.default.editarCriterio);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasPriv.js.map