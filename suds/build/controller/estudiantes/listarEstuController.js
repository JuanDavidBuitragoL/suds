"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estudiantesRepo_1 = require("../../repository/estudiantes/estudiantesRepo");
const listarEstuDAO_1 = __importDefault(require("../../dao/estudiantes/listarDAO/listarEstuDAO"));
class listarEstuController extends listarEstuDAO_1.default {
    ctrlListarTodos(req, res) {
        const sql_estudiantes_listar = estudiantesRepo_1.SQL_ESTUDIANTES.LISTAR_TODOS;
        listarEstuController.listarTodos(sql_estudiantes_listar, [], res);
    }
}
const ctrlListarTodos = new listarEstuController();
exports.default = ctrlListarTodos;
//# sourceMappingURL=listarEstuController.js.map