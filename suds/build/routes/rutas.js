"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accesoControladorVerificar_1 = __importDefault(require("../controller/acceso/accesoControladorVerificar"));
const usuariosController_1 = __importDefault(require("../controller/usuarios/usuariosController"));
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
        this.rutasAPI.get("/listarTodosUsu", usuariosController_1.default.ctrlListarTodosUsu);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutas.js.map