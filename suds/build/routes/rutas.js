"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accesoControladorVerificar_1 = __importDefault(require("../controller/acceso/accesoControladorVerificar"));
const componentesController_1 = __importDefault(require("../controller/componentes/componentesController"));
const criteriosController_1 = __importDefault(require("../controller/criterios/criteriosController"));
const proyectosController_1 = __importDefault(require("../controller/proyectos/proyectosController"));
const resrultadosController_1 = __importDefault(require("../controller/resultados/resrultadosController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        //TODO:
        //cargar el inicio de la configuracion de rutas
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.post("/login", accesoControladorVerificar_1.default.verificarUsuario);
        this.rutasAPI.get("/listarTodosCom", componentesController_1.default.listarTodosCom);
        this.rutasAPI.get("/listarTodosCri", criteriosController_1.default.listarTodosCri);
        this.rutasAPI.get("/listarTodosPro", proyectosController_1.default.listarTodosPro);
        this.rutasAPI.get("/listarTodosRes", resrultadosController_1.default.listarTodosRes);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutas.js.map