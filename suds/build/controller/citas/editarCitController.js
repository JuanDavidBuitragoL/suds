"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editarCitDAO_1 = __importDefault(require("../../dao/citas/actualizarDAO/editarCitDAO"));
const citasRepository_1 = require("../../repository/citas/citasRepository");
class editarCitController extends editarCitDAO_1.default {
    updateCita(req, res) {
        const { fecha_cita, precio_cita, eps_cita, motivo_cita, id_paciente, id_doctor, id_cita } = req.body;
        const datos = [fecha_cita, precio_cita, eps_cita, motivo_cita, id_paciente, id_doctor, id_cita];
        editarCitController.editarCita(citasRepository_1.SQL_CITAS.EDITAR, datos, res);
    }
}
const ctrlEditarCit = new editarCitController();
exports.default = ctrlEditarCit;
//# sourceMappingURL=editarCitController.js.map