"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//pacientes
const listarPacController_1 = __importDefault(require("../../controller/pacientes/listarPacController"));
const crearPacController_1 = __importDefault(require("../../controller/pacientes/crearPacController"));
const eliminarPacController_1 = __importDefault(require("../../controller/pacientes/eliminarPacController"));
const editarPacController_1 = __importDefault(require("../../controller/pacientes/editarPacController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarTodosPac", listarPacController_1.default.ctrlListarTodosPac);
        this.rutasAPI.post("/crearPac", crearPacController_1.default.postPaciente);
        this.rutasAPI.delete("/eliminarPac/:id", eliminarPacController_1.default.borrarPaciente);
        this.rutasAPI.put("/editarPac", editarPacController_1.default.updatePaciente);
        /* ******************************************************************** */
        this.rutasAPI.get("/consulta2", listarPacController_1.default.ctrlconsulta2);
        this.rutasAPI.get("/consulta10", listarPacController_1.default.ctrlconsulta10);
        this.rutasAPI.get("/consulta11", listarPacController_1.default.ctrlconsulta11);
        this.rutasAPI.get("/consulta12", listarPacController_1.default.ctrlconsulta12);
        this.rutasAPI.get("/consulta13", listarPacController_1.default.ctrlconsulta13);
        this.rutasAPI.get("/consulta15/:identificacion_paciente", listarPacController_1.default.ctrlconsulta15);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasPacientes.js.map