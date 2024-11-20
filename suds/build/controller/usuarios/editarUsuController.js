"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editarUsuDAO_1 = __importDefault(require("../../dao/usuarios/actualizarDAO/editarUsuDAO"));
const usuariosRepository_1 = require("../../repository/usuarios/usuariosRepository");
class editarUsuController extends editarUsuDAO_1.default {
    updateUsuario(req, res) {
        const { nombre_usuario, contraseña_usuario, id_usuario } = req.body;
        const datos = [nombre_usuario, contraseña_usuario, id_usuario];
        editarUsuController.editarUsuario(usuariosRepository_1.SQL_USUARIOS.EDITAR, datos, res);
    }
}
const ctrlEditarUsu = new editarUsuController();
exports.default = ctrlEditarUsu;
//# sourceMappingURL=editarUsuController.js.map