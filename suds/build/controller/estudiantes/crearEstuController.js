"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crearEstuDAO_1 = __importDefault(require("../../dao/estudiantes/crearDAO/crearEstuDAO"));
const estudiantesRepo_1 = require("../../repository/estudiantes/estudiantesRepo");
class crearEstuController extends crearEstuDAO_1.default {
    postEstudiante(req, res) {
        const { nombre, apellido, email, id_colegio } = req.body;
        const datos = [nombre, apellido, email, id_colegio];
        crearEstuController.crearEstudiante(estudiantesRepo_1.SQL_ESTUDIANTES.VERIFICAR, estudiantesRepo_1.SQL_ESTUDIANTES.CREAR, datos, res);
    }
}
const ctrlCrearEstu = new crearEstuController();
exports.default = ctrlCrearEstu;
//# sourceMappingURL=crearEstuController.js.map