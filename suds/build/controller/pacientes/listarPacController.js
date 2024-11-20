"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarPacDAO_1 = __importDefault(require("../../dao/pacientes/listarDAO/listarPacDAO"));
const pacientesRepository_1 = require("../../repository/pacientes/pacientesRepository");
class listarPacController extends listarPacDAO_1.default {
    ctrlListarTodosPac(req, res) {
        const sql_pacientes_listar = pacientesRepository_1.SQL_PACIENTES.LISTAR_TODOS;
        listarPacController.listarTodosPac(sql_pacientes_listar, [], res);
    }
    ctrlconsulta2(req, res) {
        const sql_consulta2 = pacientesRepository_1.SQL_PACIENTES.CONSULTA2;
        listarPacController.consulta2(sql_consulta2, [], res);
    }
    ctrlconsulta10(req, res) {
        const sql_consulta10 = pacientesRepository_1.SQL_PACIENTES.CONSULTA10;
        listarPacController.consulta10(sql_consulta10, [], res);
    }
    ctrlconsulta11(req, res) {
        const sql_consulta11 = pacientesRepository_1.SQL_PACIENTES.CONSULTA11;
        listarPacController.consulta11(sql_consulta11, [], res);
    }
    ctrlconsulta12(req, res) {
        const sql_consulta12 = pacientesRepository_1.SQL_PACIENTES.CONSULTA12;
        listarPacController.consulta12(sql_consulta12, [], res);
    }
    ctrlconsulta13(req, res) {
        const sql_consulta13 = pacientesRepository_1.SQL_PACIENTES.CONSULTA13;
        listarPacController.consulta13(sql_consulta13, [], res);
    }
    ctrlconsulta15(req, res) {
        const identificacion_paciente = req.params.identificacion_paciente;
        const sql_consulta15 = pacientesRepository_1.SQL_PACIENTES.CONSULTA15;
        listarPacController.consulta15(sql_consulta15, identificacion_paciente, res);
    }
}
const ctrlListarTodosPac = new listarPacController();
exports.default = ctrlListarTodosPac;
//# sourceMappingURL=listarPacController.js.map