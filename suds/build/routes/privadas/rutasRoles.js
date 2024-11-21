"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolesController_1 = __importDefault(require("../../controller/roles/rolesController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarRoles", rolesController_1.default.listarRoles);
        this.rutasAPI.post("/crearRol", rolesController_1.default.crearRol);
        this.rutasAPI.delete("/eliminarRol/:id", rolesController_1.default.borrarRol);
        this.rutasAPI.put("/editarRol/:id_rol", rolesController_1.default.updateRol);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasRoles.js.map