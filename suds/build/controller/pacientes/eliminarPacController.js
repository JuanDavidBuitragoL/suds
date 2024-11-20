"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarPacDAO_1 = __importDefault(require("../../dao/pacientes/elminarDAO/eliminarPacDAO"));
const pacientesRepository_1 = require("../../repository/pacientes/pacientesRepository");
class eliminarPacController extends eliminarPacDAO_1.default {
    borrarPaciente(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        eliminarPacController.borrarPorId(pacientesRepository_1.SQL_PACIENTES.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarPac = new eliminarPacController();
exports.default = ctrlEliminarPac;
//# sourceMappingURL=eliminarPacController.js.map