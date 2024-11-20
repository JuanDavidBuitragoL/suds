"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estudiantesDAO_1 = __importDefault(require("../dao/estudiantesDAO"));
const estudiantesRepo_1 = require("../repository/estudiantesRepo");
class Controlador extends estudiantesDAO_1.default {
    ctrlMensaje(req, res) {
        const sql_estudiantes_test = estudiantesRepo_1.SQL_ESTUDIANTES.TEST;
        Controlador.test(sql_estudiantes_test, [], res);
    }
    ctrlMensaje2(req, res) {
        res.status(200).json({
            Mensaje: "Tengo el mismo controlador",
        });
    }
    ctrlListarTodos(req, res) {
        const sql_estudiantes_listar = estudiantesRepo_1.SQL_ESTUDIANTES.LISTAR_TODOS;
        Controlador.listarTodos(sql_estudiantes_listar, [], res);
    }
    ctrlListareEstCol(req, res) {
        const sql_estudiantes_col = estudiantesRepo_1.SQL_ESTUDIANTES.LISTAR_EST_COL;
        Controlador.listarEstCol(sql_estudiantes_col, [], res);
    }
    ctrlListarPorID(req, res) {
        const id = req.params.id;
        const sql_listID = estudiantesRepo_1.SQL_ESTUDIANTES.LISTAR_POR_ID;
        Controlador.listarPorID(sql_listID, id, res);
    }
    ctrlListarPorNombre(req, res) {
        const nombre = req.params.nombre;
        const sql_listNombre = estudiantesRepo_1.SQL_ESTUDIANTES.LISTAR_POR_NOMBRE;
        Controlador.listarPorNombre(sql_listNombre, nombre, res);
    }
    ctrlListarPorNomApe(req, res) {
        const { nombre, apellidos } = req.params;
        const sql_listNomApe = estudiantesRepo_1.SQL_ESTUDIANTES.LISTAR_POR_NOMBRE_AP;
        Controlador.listarPorNomApe(sql_listNomApe, [nombre, apellidos], res);
    }
    ctrlCrear(req, res) {
        const nuevo = req.body;
        res.status(201).json({
            Mensaje: "Creando",
            Nuevo: nuevo,
        });
    }
    ctrlEliminar(req, res) {
        const id = req.params.id;
        const eliminado = req.body;
        res.status(200).json({
            Mensaje: "Eliminando",
            Eliminado: eliminado,
            id: id,
        });
    }
    ctrlActualizar(req, res) {
        const actualizado = req.body;
        const id = req.params.id;
        res.status(200).json({
            Mensaje: "Actualizando a: " + id,
            Actualizado: actualizado,
        });
    }
}
const controlador = new Controlador();
exports.default = controlador;
//# sourceMappingURL=controlador.js.map