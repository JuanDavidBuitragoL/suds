"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuariosRepository_1 = require("../../repository/usuarios/usuariosRepository");
const usuariosDAO_1 = __importDefault(require("../../dao/usuarios/usuariosDAO"));
class usuariosController extends usuariosDAO_1.default {
    ctrlListarTodosUsu(req, res) {
        const sql_usuarios_listar = usuariosRepository_1.SQL_USUARIOS.LISTAR_TODOS;
        usuariosController.listarTodosUsu(sql_usuarios_listar, [], res);
    }
    postUsuario(req, res) {
        const { nombre_usuario, correo_usuario, password_usuario, nombres_usuario, apellidos_usuario } = req.body;
        const datos = [nombre_usuario, correo_usuario, password_usuario, nombres_usuario, apellidos_usuario];
        usuariosController.crearUsuario(usuariosRepository_1.SQL_USUARIOS.VERIFICAR, usuariosRepository_1.SQL_USUARIOS.CREAR, datos, res);
    }
    updateUsuario(req, res) {
        const { nombre_usuario, correo_usuario, password_usuario, nombres_usuario, apellidos_usuario } = req.body;
        const id_usuario = req.params.id; // Ahora obtenemos el id desde params
        const datos = [nombre_usuario, correo_usuario, password_usuario, nombres_usuario, apellidos_usuario, id_usuario];
        usuariosController.editarUsuario(usuariosRepository_1.SQL_USUARIOS.EDITAR, datos, res);
    }
    borrarUsuario(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        usuariosController.borrarPorId(usuariosRepository_1.SQL_USUARIOS.ELIMINAR, parametro, res);
    }
}
const ctrlUsuarios = new usuariosController();
exports.default = ctrlUsuarios;
//# sourceMappingURL=usuariosController.js.map