"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarOptDAO_1 = __importDefault(require("../../dao/opticas/listarDAO/listarOptDAO"));
const opticasRepository_1 = require("../../repository/opticas/opticasRepository");
class listarOptController extends listarOptDAO_1.default {
    ctrlListarTodosOpt(req, res) {
        const sql_opticas_listar = opticasRepository_1.SQL_OPTICAS.LISTAR_TODOS;
        listarOptController.listarTodosOpt(sql_opticas_listar, [], res);
    }
    ctrlConsulta7(req, res) {
        const sql_consulta7 = opticasRepository_1.SQL_OPTICAS.CONSULTA7;
        listarOptController.consulta7(sql_consulta7, [], res);
    }
    ctrlConsulta9(req, res) {
        const sql_consulta9 = opticasRepository_1.SQL_OPTICAS.CONSULTA9;
        listarOptController.consulta9(sql_consulta9, [], res);
    }
}
const ctrlListarTodosOpt = new listarOptController();
exports.default = ctrlListarTodosOpt;
//# sourceMappingURL=listarOptController.js.map