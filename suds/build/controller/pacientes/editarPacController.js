"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editarPacDAO_1 = __importDefault(require("../../dao/pacientes/actualizarDAO/editarPacDAO"));
const pacientesRepository_1 = require("../../repository/pacientes/pacientesRepository");
class editarPacController extends editarPacDAO_1.default {
    updatePaciente(req, res) {
        const { identificacion_paciente, nombre_paciente, apellido_paciente, fechanacimiento_paciente, direccion_paciente, id_ciudad, id_paciente } = req.body;
        const datos = [identificacion_paciente, nombre_paciente, apellido_paciente, fechanacimiento_paciente, direccion_paciente, id_ciudad, id_paciente];
        editarPacController.editarPaciente(pacientesRepository_1.SQL_PACIENTES.EDITAR, datos, res);
    }
}
const ctrlEditarPac = new editarPacController();
exports.default = ctrlEditarPac;
//# sourceMappingURL=editarPacController.js.map