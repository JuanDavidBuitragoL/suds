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
const conexion_1 = __importDefault(require("../../config/conection/conexion"));
class rolesDAO {
    static listarRoles(sql_listar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sql_listar, parametros)
                .then((respuesta) => {
                console.log(">>>>>" + respuesta.rows);
                return res.status(200).json({ Mensaje: "Roles: ", Respuesta: respuesta.rows });
            })
                .catch((error) => {
                console.log("Exploto D:...", error);
                res.status(400).json({ Mensaje: "Error listando Roles, comunique al administrador" });
            });
        });
    }
    static crearRol(sqlConfirmar, sqlCrear, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, params);
                if (dato.cantidad == 0) {
                    return yield consulta.one(sqlCrear, params);
                }
                else {
                    return { id_rol: 0 };
                }
            })).then((respuesta) => {
                if (respuesta.id_rol != 0) {
                    res.status(200).json({
                        Mensaje: "Rol cread@",
                        nuevoCodigo: respuesta.id_rol
                    });
                }
                else {
                    res.status(400).json({
                        Mensaje: "Rol no cread@, puede estar repetid@",
                    });
                }
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "Rol no cread@",
                });
            });
        });
    }
    static editarRol(sqlActualizar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.result(sqlActualizar, params);
            }))
                .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({
                    respuesta: "Rol actualizad@ ",
                });
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "Rol no actualizad@",
                });
            });
        });
    }
    /*Eliminar */
    static borrarPorId(sqlBorrar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sqlBorrar, params)
                .then((dato) => {
                console.log(dato);
                return res.status(200).json({
                    Mensaje: "Rol borrad@",
                    resultado: dato.rowCount,
                });
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "Error eliminando Rol...",
                });
            });
        });
    }
}
exports.default = rolesDAO;
//# sourceMappingURL=rolesDAO.js.map