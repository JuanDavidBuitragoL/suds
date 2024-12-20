"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accesoRepository_1 = require("../../repository/acceso/accesoRepository");
const validarAcceso_1 = __importDefault(require("../../dao/acceso/validarAcceso"));
class accesoControladorVerificar extends validarAcceso_1.default {
    verificarUsuario(req, res) {
        const correo_usuario = req.body.correo_usuario;
        const clave = req.body.password_usuario;
        const parametro = [correo_usuario, clave];
        accesoControladorVerificar.iniciarSesion(accesoRepository_1.SQL_ACCESO_VERIFICAR.ACCESO_VERIFICAR, parametro, res);
    }
}
const accesoControladorVerificar_var = new accesoControladorVerificar();
exports.default = accesoControladorVerificar_var;
//# sourceMappingURL=accesoControladorVerificar.js.map