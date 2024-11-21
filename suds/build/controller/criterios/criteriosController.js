"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const criteriosRepository_1 = require("../../repository/criterios/criteriosRepository");
const criteriosDAO_1 = __importDefault(require("../../dao/criterios/criteriosDAO"));
class criteriosController extends criteriosDAO_1.default {
    listarTodosCri(req, res) {
        criteriosController.listarTodosCri(criteriosRepository_1.SQL_CRITERIOS.LISTAR_TODOS, [], res);
    }
    crearCriterio(req, res) {
        const { nombre_criterio, descripcion, intensidad, valor_cuantitativo, valor_cualitativo, id_componente } = req.body;
        const datos = [nombre_criterio, descripcion, intensidad, valor_cuantitativo, valor_cualitativo, id_componente];
        criteriosController.crearCritero(criteriosRepository_1.SQL_CRITERIOS.VERIFICAR, criteriosRepository_1.SQL_CRITERIOS.CREAR, datos, res);
    }
    editarCriterio(req, res) {
        const { nombre_criterio, descripcion, intensidad, valor_cuantitativo, valor_cualitativo, id_componente } = req.body;
        const id_criterio = req.params.id; // Obtenemos el id desde params
        const datos = [nombre_criterio, descripcion, intensidad, valor_cuantitativo, valor_cualitativo, id_componente, id_criterio];
        criteriosController.editarCriterio(criteriosRepository_1.SQL_CRITERIOS.EDITAR, datos, res);
    }
    borrarCriterio(req, res) {
        const id_criterio = req.params.id;
        const parametro = [id_criterio];
        criteriosController.borrarCriterio(criteriosRepository_1.SQL_CRITERIOS.ELIMINAR, parametro, res);
    }
}
const ctrlCriterios = new criteriosController();
exports.default = ctrlCriterios;
//# sourceMappingURL=criteriosController.js.map