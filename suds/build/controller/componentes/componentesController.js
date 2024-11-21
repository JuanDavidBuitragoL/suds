"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const componentesRepository_1 = require("../../repository/componentes/componentesRepository");
const componentesDAO_1 = __importDefault(require("../../dao/componentes/componentesDAO"));
class componentesController extends componentesDAO_1.default {
    listarTodosCom(req, res) {
        componentesController.listarTodosCom(componentesRepository_1.SQL_COMPONENTES.LISTAR_TODOS, [], res);
    }
    crearComponente(req, res) {
        const { nombre_componente, descripcion, photo, valor_amenidad, valor_cualitativo } = req.body;
        const datos = [nombre_componente, descripcion, photo, valor_amenidad, valor_cualitativo];
        componentesController.crearComponente(componentesRepository_1.SQL_COMPONENTES.VERIFICAR, componentesRepository_1.SQL_COMPONENTES.CREAR, datos, res);
    }
    editarComponente(req, res) {
        const { nombre_componente, descripcion, photo, valor_amenidad, valor_cualitativo } = req.body;
        const id_componente = req.params.id;
        const datos = [nombre_componente, descripcion, photo, valor_amenidad, valor_cualitativo, id_componente];
        componentesController.editarComponente(componentesRepository_1.SQL_COMPONENTES.EDITAR, datos, res);
    }
    borrarComponente(req, res) {
        const id_componente = req.params.id;
        const parametro = [id_componente];
        componentesController.borrarComponente(componentesRepository_1.SQL_COMPONENTES.ELIMINAR, parametro, res);
    }
}
const ctrlComponentes = new componentesController();
exports.default = ctrlComponentes;
//# sourceMappingURL=componentesController.js.map