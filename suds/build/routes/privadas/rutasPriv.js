"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = __importDefault(require("../../controller/usuarios/usuariosController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarTodosUsu", usuariosController_1.default.ctrlListarTodosUsu);
        this.rutasAPI.post("/crearUsu", usuariosController_1.default.postUsuario);
        this.rutasAPI.delete("/eliminarUsu/:id", usuariosController_1.default.borrarUsuario);
        this.rutasAPI.put("/editarUsu/:id", usuariosController_1.default.updateUsuario);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasPriv.js.map