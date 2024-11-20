"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listarDocController_1 = __importDefault(require("../../controller/doctores/listarDocController"));
const crearDocController_1 = __importDefault(require("../../controller/doctores/crearDocController"));
const eliminarDocController_1 = __importDefault(require("../../controller/doctores/eliminarDocController"));
const editarDocController_1 = __importDefault(require("../../controller/doctores/editarDocController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarTodosDoc", listarDocController_1.default.ctrlListarTodosDoc);
        this.rutasAPI.post("/crearDoc", crearDocController_1.default.postDoctor);
        this.rutasAPI.delete("/eliminarDoc/:id", eliminarDocController_1.default.borrarDoctor);
        this.rutasAPI.put("/editarDoc", editarDocController_1.default.updateDoctor);
        /* ******************************************************************** */
        this.rutasAPI.get("/consulta4", listarDocController_1.default.ctrlconsulta4);
        this.rutasAPI.get("/consulta6", listarDocController_1.default.ctrlconsulta6);
        this.rutasAPI.get("/consulta14/:nombre_doctor/:apellido_doctor", listarDocController_1.default.ctrlConsulta14);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasDoctores.js.map