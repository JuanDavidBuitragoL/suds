"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indicadoresRespoitory_1 = require("./../../repository/indicadores/indicadoresRespoitory");
const indicadoresDAO_1 = __importDefault(require("../../dao/indicadores/indicadoresDAO"));
class indicadoresController extends indicadoresDAO_1.default {
    listarIndicadores(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        const sql_listar_id = indicadoresRespoitory_1.SQL_INDICADORES.LISTAR_TODOS;
        indicadoresController.listarIndicadores(sql_listar_id, parametro, res);
    }
    crearIndicador(req, res) {
        const { nombre_indicador, descripcion, id_criterio, vector_propio } = req.body;
        // Crea el array de datos a guardar en la base de datos
        const datos = [nombre_indicador, descripcion, id_criterio, vector_propio];
        indicadoresController.crearIndicador(indicadoresRespoitory_1.SQL_INDICADORES.VERIFICAR, indicadoresRespoitory_1.SQL_INDICADORES.CREAR, datos, res);
    }
    updateIndicador(req, res) {
        const id_indicador = parseInt(req.params.id_indicador);
        const { nombre_indicador, descripcion, id_criterio, vector_propio } = req.body;
        const datos = [nombre_indicador, descripcion, id_criterio, vector_propio, id_indicador];
        indicadoresController.editarIndicador(indicadoresRespoitory_1.SQL_INDICADORES.EDITAR, datos, res);
    }
    borrarIndicador(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        indicadoresController.borrarPorId(indicadoresRespoitory_1.SQL_INDICADORES.ELIMINAR, parametro, res);
    }
}
const ctrlIndicadores = new indicadoresController();
exports.default = ctrlIndicadores;
//# sourceMappingURL=indicadoresController.js.map