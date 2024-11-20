"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listarUsuController_1 = __importDefault(require("../../controller/usuarios/listarUsuController"));
const crearUsuController_1 = __importDefault(require("../../controller/usuarios/crearUsuController"));
const eliminarUsuController_1 = __importDefault(require("../../controller/usuarios/eliminarUsuController"));
const editarUsuController_1 = __importDefault(require("../../controller/usuarios/editarUsuController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarTodosUsu", listarUsuController_1.default.ctrlListarTodosUsu);
        this.rutasAPI.post("/crearUsu", crearUsuController_1.default.postUsuario);
        this.rutasAPI.delete("/eliminarUsu/:id", eliminarUsuController_1.default.borrarUsuario);
        this.rutasAPI.put("/editarUsu", editarUsuController_1.default.updateUsuario);
        /* ******************************************************************** */
        this.rutasAPI.get("/consulta16", listarUsuController_1.default.ctrlConsulta16);
        /* ******************************************************************** */
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasUsuarios.js.map