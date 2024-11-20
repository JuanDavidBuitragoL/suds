"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listarCiuController_1 = __importDefault(require("../../controller/ciudades/listarCiuController"));
const crearCiuController_1 = __importDefault(require("../../controller/ciudades/crearCiuController"));
const eliminarCiuController_1 = __importDefault(require("../../controller/ciudades/eliminarCiuController"));
const editarCiuController_1 = __importDefault(require("../../controller/ciudades/editarCiuController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarTodosCiu", listarCiuController_1.default.ctrlListarTodosCiu);
        this.rutasAPI.post("/crearCiu", crearCiuController_1.default.postCiudad);
        this.rutasAPI.delete("/eliminarCiu/:id", eliminarCiuController_1.default.borrarCiu);
        this.rutasAPI.put("/editarCiu", editarCiuController_1.default.updateCiudad);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasCiudades.js.map