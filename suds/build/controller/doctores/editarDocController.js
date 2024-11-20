"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editarDocDAO_1 = __importDefault(require("../../dao/doctores/actualizarDAO/editarDocDAO"));
const doctoresRepository_1 = require("../../repository/doctores/doctoresRepository");
class editarDocController extends editarDocDAO_1.default {
    updateDoctor(req, res) {
        const { nombre_doctor, apellido_doctor, especialidad_doctor, añosexperiencia_doctor, id_doctor } = req.body;
        const datos = [nombre_doctor, apellido_doctor, especialidad_doctor, añosexperiencia_doctor, id_doctor];
        editarDocController.editarDoctor(doctoresRepository_1.SQL_DOCTORES.EDITAR, datos, res);
    }
}
const ctrlEditarDoc = new editarDocController();
exports.default = ctrlEditarDoc;
//# sourceMappingURL=editarDocController.js.map