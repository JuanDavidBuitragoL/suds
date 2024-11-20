"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarUsuDAO_1 = __importDefault(require("../../dao/usuarios/elminarDAO/eliminarUsuDAO"));
const usuariosRepository_1 = require("../../repository/usuarios/usuariosRepository");
class eliminarUsuController extends eliminarUsuDAO_1.default {
    borrarUsuario(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        eliminarUsuController.borrarPorId(usuariosRepository_1.SQL_USUARIOS.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarUsu = new eliminarUsuController();
exports.default = ctrlEliminarUsu;
//# sourceMappingURL=eliminarUsuController.js.map