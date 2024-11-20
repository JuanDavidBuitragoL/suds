"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colegiosRepo_1 = require("../../repository/colegios/colegiosRepo");
const colegiosDAO_1 = __importDefault(require("../../dao/colegios/listarDAO/colegiosDAO"));
class ColegioController extends colegiosDAO_1.default {
    ctrlListarTodosC(req, res) {
        const sql_colegios_listar = colegiosRepo_1.SQL_COLEGIOS.LISTAR_TODOS;
        ColegioController.listarTodosC(sql_colegios_listar, [], res);
    }
    ctrlContarCol(req, res) {
        const sql_colegios = colegiosRepo_1.SQL_COLEGIOS.CONTAR_COL;
        ColegioController.ContarCol(sql_colegios, [], res);
    }
}
const colegioController = new ColegioController();
exports.default = colegioController;
//# sourceMappingURL=ColegioController.js.map