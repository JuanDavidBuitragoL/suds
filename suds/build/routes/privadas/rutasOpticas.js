"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listarOptController_1 = __importDefault(require("../../controller/opticas/listarOptController"));
const crearOptController_1 = __importDefault(require("../../controller/opticas/crearOptController"));
const eliminarOptController_1 = __importDefault(require("../../controller/opticas/eliminarOptController"));
const editarOptController_1 = __importDefault(require("../../controller/opticas/editarOptController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarTodosOpt", listarOptController_1.default.ctrlListarTodosOpt);
        this.rutasAPI.post("/crearOpt", crearOptController_1.default.postOptica);
        this.rutasAPI.delete("/eliminarOpt/:id", eliminarOptController_1.default.borrarOptica);
        this.rutasAPI.put("/editarOpt", editarOptController_1.default.updateOptica);
        /* ******************************************************************** */
        this.rutasAPI.get("/consulta7", listarOptController_1.default.ctrlConsulta7);
        this.rutasAPI.get("/consulta9", listarOptController_1.default.ctrlConsulta9);
        /* ******************************************************************** */
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasOpticas.js.map