"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crearPacDAO_1 = __importDefault(require("../../dao/pacientes/crearDAO/crearPacDAO"));
const pacientesRepository_1 = require("../../repository/pacientes/pacientesRepository");
class crearPacController extends crearPacDAO_1.default {
    postPaciente(req, res) {
        const { identificacion_paciente, nombre_paciente, apellido_paciente, fechanacimiento_paciente, direccion_paciente, id_ciudad } = req.body;
        const datos = [identificacion_paciente, nombre_paciente, apellido_paciente, fechanacimiento_paciente, direccion_paciente, id_ciudad];
        crearPacController.crearPaciente(pacientesRepository_1.SQL_PACIENTES.VERIFICAR, pacientesRepository_1.SQL_PACIENTES.CREAR, datos, res);
    }
}
const ctrlCrearPac = new crearPacController();
exports.default = ctrlCrearPac;
//# sourceMappingURL=crearPacController.js.map