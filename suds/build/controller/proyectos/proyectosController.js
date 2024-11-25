"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const proyectosRepository_1 = require("../../repository/proyectos/proyectosRepository");
const proyectosDAO_1 = __importDefault(require("../../dao/proyectos/proyectosDAO"));
class proyectosController extends proyectosDAO_1.default {
    listarTodosPro(req, res) {
        proyectosController.listarTodosPro(proyectosRepository_1.SQL_PROYECTOS.LISTAR_TODOS, [], res);
    }
    crearProyecto(req, res) {
        const { nombre, fecha_realizacion, amenidad, localizacion, geolocalizacion, photo } = req.body;
        const datos = [nombre, fecha_realizacion, amenidad, localizacion, geolocalizacion, photo];
        proyectosController.crearProyecto(proyectosRepository_1.SQL_PROYECTOS.VERIFICAR, proyectosRepository_1.SQL_PROYECTOS.CREAR, datos, res);
    }
    editarProyecto(req, res) {
        const { nombre, fecha_realizacion, amenidad, localizacion, geolocalizacion, photo } = req.body;
        const id_proyecto = req.params.id;
        const datos = [nombre, fecha_realizacion, amenidad, localizacion, geolocalizacion, photo, id_proyecto];
        proyectosController.editarProyecto(proyectosRepository_1.SQL_PROYECTOS.EDITAR, datos, res);
    }
    borrarProyecto(req, res) {
        const id_proyecto = req.params.id;
        const parametro = [id_proyecto];
        proyectosController.borrarProyecto(proyectosRepository_1.SQL_PROYECTOS.ELIMINAR, parametro, res);
    }
    listarId(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        const sql_listar_id = proyectosRepository_1.SQL_PROYECTOS.COMPONENTES;
        proyectosController.listarProyectoPorId(sql_listar_id, parametro, res);
    }
}
const ctrlProyectos = new proyectosController();
exports.default = ctrlProyectos;
//# sourceMappingURL=proyectosController.js.map