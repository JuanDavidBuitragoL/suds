"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resultadosRepository_1 = require("../../repository/resultados/resultadosRepository");
const resultadosDAO_1 = __importDefault(require("../../dao/resultados/resultadosDAO"));
class resultadosController extends resultadosDAO_1.default {
    listarTodosRes(req, res) {
        resultadosController.listarTodosRes(resultadosRepository_1.SQL_RESULTADOS.LISTAR_TODOS, [], res);
    }
    crearResultado(req, res) {
        const { nombre_resultado, descripcion, valor_cualitativo, valor_cuantitativo, fecha, id_escala, id_proyecto, id_ingeniero } = req.body;
        const datos = [nombre_resultado, descripcion, valor_cualitativo, valor_cuantitativo, fecha, id_escala, id_proyecto, id_ingeniero];
        resultadosController.crearResultado(resultadosRepository_1.SQL_RESULTADOS.VERIFICAR, resultadosRepository_1.SQL_RESULTADOS.CREAR, datos, res);
    }
    editarResultado(req, res) {
        const { nombre_resultado, descripcion, valor_cualitativo, valor_cuantitativo, fecha, id_escala, id_proyecto, id_ingeniero } = req.body;
        const id_resultado = req.params.id;
        const datos = [nombre_resultado, descripcion, valor_cualitativo, valor_cuantitativo, fecha, id_escala, id_proyecto, id_ingeniero, id_resultado];
        resultadosController.editarResultado(resultadosRepository_1.SQL_RESULTADOS.EDITAR, datos, res);
    }
    borrarResultado(req, res) {
        const id_resultado = req.params.id;
        const parametro = [id_resultado];
        resultadosController.borrarResultado(resultadosRepository_1.SQL_RESULTADOS.ELIMINAR, parametro, res);
    }
}
const ctrlResultados = new resultadosController();
exports.default = ctrlResultados;
//# sourceMappingURL=resrultadosController.js.map