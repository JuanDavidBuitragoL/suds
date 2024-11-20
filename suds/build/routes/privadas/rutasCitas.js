"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//citas
const listarCitController_1 = __importDefault(require("../../controller/citas/listarCitController"));
const crearCitController_1 = __importDefault(require("../../controller/citas/crearCitController"));
const eliminarCitController_1 = __importDefault(require("../../controller/citas/eliminarCitController"));
const editarCitController_1 = __importDefault(require("../../controller/citas/editarCitController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarTodosCit", listarCitController_1.default.ctrlListarTodosCit);
        this.rutasAPI.post("/crearCit", crearCitController_1.default.postCita);
        this.rutasAPI.delete("/eliminarCit/:id", eliminarCitController_1.default.borrarCita);
        this.rutasAPI.put("/editarCit", editarCitController_1.default.updateCita);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasCitas.js.map