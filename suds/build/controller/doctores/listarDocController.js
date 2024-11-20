"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarDocDAO_1 = __importDefault(require("../../dao/doctores/listarDAO/listarDocDAO"));
const doctoresRepository_1 = require("../../repository/doctores/doctoresRepository");
class listarDocController extends listarDocDAO_1.default {
    ctrlListarTodosDoc(req, res) {
        const sql_doctores_listar = doctoresRepository_1.SQL_DOCTORES.LISTAR_TODOS;
        listarDocController.listarTodosDoc(sql_doctores_listar, [], res);
    }
    ctrlconsulta4(req, res) {
        const sql_consulta4 = doctoresRepository_1.SQL_DOCTORES.CONSULTA4;
        listarDocController.consulta4(sql_consulta4, [], res);
    }
    ctrlconsulta6(req, res) {
        const sql_consulta6 = doctoresRepository_1.SQL_DOCTORES.CONSULTA6;
        listarDocController.consulta6(sql_consulta6, [], res);
    }
    ctrlConsulta14(req, res) {
        const { nombre_doctor, apellido_doctor } = req.params;
        const sql_consulta14 = doctoresRepository_1.SQL_DOCTORES.CONSULTA14;
        listarDocController.consulta14(sql_consulta14, [nombre_doctor, apellido_doctor], res);
    }
}
const ctrlListarTodosDoc = new listarDocController();
exports.default = ctrlListarTodosDoc;
//# sourceMappingURL=listarDocController.js.map