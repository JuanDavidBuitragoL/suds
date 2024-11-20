"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accesoDAORespuesta_1 = __importDefault(require("../../dao/acceso/accesoDAORespuesta"));
const conexion_1 = __importDefault(require("../../config/conection/conexion"));
class validarAcceso {
    static iniciarSesion(//Este es el metodo temporar, probablemente remplace validarAcceso()
    sqlConfirmar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .oneOrNone(sqlConfirmar, parametros)
                .then((dato) => {
                return accesoDAORespuesta_1.default.procesar(dato, res);
            })
                .catch((mierror) => {
                console.log(mierror);
                return res.status(500).json({
                    msg: 'Error transacción servidor'
                });
            });
        });
    }
    static validarAcceso(sqlConfirmar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sqlConfirmar, parametros)
                .then((dato) => {
                console.log("Datos devueltos: ", dato.rowCount);
                if (dato.rowCount == 0) {
                    return res.status(400).json({
                        mensaje: "Error en la validación ",
                    });
                }
                else {
                    return res.status(200).json({
                        mensaje: "Usuario Encontrado",
                        resultado: dato.rows,
                    });
                }
            })
                .catch((mierror) => {
                console.log(mierror);
                res.status(400).json({
                    mensjae: "No se encontro el usuario",
                });
            });
        });
    }
}
exports.default = validarAcceso;
//# sourceMappingURL=validarAcceso.js.map