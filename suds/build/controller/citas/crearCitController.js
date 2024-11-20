"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crearCitDAO_1 = __importDefault(require("../../dao/citas/crearDAO/crearCitDAO"));
const citasRepository_1 = require("../../repository/citas/citasRepository");
class crearCitController extends crearCitDAO_1.default {
    postCita(req, res) {
        const { fecha_cita, precio_cita, eps_cita, motivo_cita, id_paciente, id_doctor } = req.body;
        const datos = [fecha_cita, precio_cita, eps_cita, motivo_cita, id_paciente, id_doctor];
        crearCitController.crearCita(citasRepository_1.SQL_CITAS.VERIFICAR, citasRepository_1.SQL_CITAS.CREAR, datos, res);
    }
}
const ctrlCrearCit = new crearCitController();
exports.default = ctrlCrearCit;
//# sourceMappingURL=crearCitController.js.map