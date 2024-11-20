"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estudiantesRepo_1 = require("../../repository/estudiantes/estudiantesRepo");
const eliminarEstuDAO_1 = __importDefault(require("../../dao/estudiantes/elminarDAO/eliminarEstuDAO"));
class eliminarEstuController extends eliminarEstuDAO_1.default {
    borrarEstudiante(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        eliminarEstuController.borrarPorId(estudiantesRepo_1.SQL_ESTUDIANTES.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarEstu = new eliminarEstuController();
exports.default = ctrlEliminarEstu;
//# sourceMappingURL=eliminarEstuController.js.map