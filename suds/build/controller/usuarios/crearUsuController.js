"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crearUsuDAO_1 = __importDefault(require("../../dao/usuarios/crearDAO/crearUsuDAO"));
const usuariosRepository_1 = require("../../repository/usuarios/usuariosRepository");
class crearUsuController extends crearUsuDAO_1.default {
    postUsuario(req, res) {
        const { nombre_usuario, contraseña_usuario } = req.body;
        const datos = [nombre_usuario, contraseña_usuario];
        crearUsuController.crearUsuario(usuariosRepository_1.SQL_USUARIOS.VERIFICAR, usuariosRepository_1.SQL_USUARIOS.CREAR, datos, res);
    }
}
const ctrlCrearUsu = new crearUsuController();
exports.default = ctrlCrearUsu;
//# sourceMappingURL=crearUsuController.js.map