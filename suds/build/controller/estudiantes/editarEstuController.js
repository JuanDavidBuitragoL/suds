"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estudiantesRepo_1 = require("../../repository/estudiantes/estudiantesRepo");
const editarEstuDAO_1 = __importDefault(require("../../dao/estudiantes/actualizarDAO/editarEstuDAO"));
class editarEstuController extends editarEstuDAO_1.default {
    updateEstudiante(req, res) {
        const { nombre, apellido, email, id_colegio, id_estudiante } = req.body;
        const datos = [nombre, apellido, email, id_colegio, id_estudiante];
        editarEstuController.editarEstudiante(estudiantesRepo_1.SQL_ESTUDIANTES.EDITAR, datos, res);
    }
}
const ctrlEditarEstu = new editarEstuController();
exports.default = ctrlEditarEstu;
//# sourceMappingURL=editarEstuController.js.map