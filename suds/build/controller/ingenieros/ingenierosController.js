"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ingenierosRepository_1 = require("./../../repository/ingenieros/ingenierosRepository");
const ingenierosDAO_1 = __importDefault(require("../../dao/ingenieros/ingenierosDAO"));
class ingenierosController extends ingenierosDAO_1.default {
    listarIngenieros(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        const sql_listar_id = ingenierosRepository_1.SQL_INGENIEROS.LISTAR_TODOS;
        ingenierosController.listarIngenieros(sql_listar_id, parametro, res);
    }
    crearIngeniero(req, res) {
        const { id_usuario, id_proyecto, fecha } = req.body;
        // Crea el array de datos a guardar en la base de datos
        const datos = [id_usuario, id_proyecto, fecha];
        ingenierosController.crearIngeniero(ingenierosRepository_1.SQL_INGENIEROS.CREAR, datos, res);
    }
    updateIngeniero(req, res) {
        const id_ingeniero = parseInt(req.params.id_ingeniero);
        const { id_usuario, id_proyecto, fecha } = req.body;
        const datos = [id_usuario, id_proyecto, fecha, id_ingeniero];
        ingenierosController.editarIngeniero(ingenierosRepository_1.SQL_INGENIEROS.EDITAR, datos, res);
    }
    borrarIngeniero(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        ingenierosController.borrarPorId(ingenierosRepository_1.SQL_INGENIEROS.ELIMINAR, parametro, res);
    }
}
const ctrlIngenieros = new ingenierosController();
exports.default = ctrlIngenieros;
//# sourceMappingURL=ingenierosController.js.map