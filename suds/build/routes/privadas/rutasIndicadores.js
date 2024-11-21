"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indicadoresController_1 = __importDefault(require("../../controller/indicadores/indicadoresController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarIndicadores", indicadoresController_1.default.listarIndicadores);
        this.rutasAPI.post("/crearIndicador", indicadoresController_1.default.crearIndicador);
        this.rutasAPI.delete("/eliminarIndicador/:id", indicadoresController_1.default.borrarIndicador);
        this.rutasAPI.put("/editarIndicador/:id_indicador", indicadoresController_1.default.updateIndicador);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasIndicadores.js.map