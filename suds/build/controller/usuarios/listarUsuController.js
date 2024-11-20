"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarUsuDAO_1 = __importDefault(require("../../dao/usuarios/listarDAO/listarUsuDAO"));
const usuariosRepository_1 = require("../../repository/usuarios/usuariosRepository");
class listarUsuController extends listarUsuDAO_1.default {
    ctrlListarTodosUsu(req, res) {
        const sql_usuarios_listar = usuariosRepository_1.SQL_USUARIOS.LISTAR_TODOS;
        listarUsuController.listarTodosUsu(sql_usuarios_listar, [], res);
    }
    ctrlConsulta16(req, res) {
        const sql_consulta16 = usuariosRepository_1.SQL_USUARIOS.CONSULTA16;
        listarUsuController.consulta16(sql_consulta16, [], res);
    }
}
const ctrlListarTodosUsu = new listarUsuController();
exports.default = ctrlListarTodosUsu;
//# sourceMappingURL=listarUsuController.js.map