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
class resultadosDAO {
    static listarTodosRes(sql_listar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sql_listar, parametros)
                .then((respuesta) => {
                res.status(200).json({ Mensaje: "Resultados:", Respuesta: respuesta.rows });
            })
                .catch((error) => {
                console.error("Error listando resultados:", error);
                res.status(400).json({ Mensaje: "Error listando resultados, contacte al administrador." });
            });
        });
    }
    static crearResultado(sqlConfirmar, sqlCrear, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, params);
                if (dato.cantidad == 0) {
                    return yield consulta.one(sqlCrear, params);
                }
                else {
                    return { id_resultado: 0 };
                }
            })).then((respuesta) => {
                if (respuesta.id_resultado != 0) {
                    res.status(200).json({
                        Mensaje: "resultado creado",
                        nuevoCodigo: respuesta.id_resultado
                    });
                }
                else {
                    res.status(400).json({
                        Mensaje: "resultado no creado, puede estar repetido",
                    });
                }
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "resultado no creado",
                });
            });
        });
    }
    static editarResultado(sqlActualizar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.result(sqlActualizar, params);
            }))
                .then(() => {
                res.status(200).json({ Mensaje: "Resultado actualizado." });
            })
                .catch((error) => {
                console.error("Error actualizando resultado:", error);
                res.status(400).json({ Mensaje: "Error actualizando resultado." });
            });
        });
    }
    static borrarResultado(sqlBorrar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sqlBorrar, params)
                .then((respuesta) => {
                res.status(200).json({ Mensaje: "Resultado eliminado.", resultado: respuesta.rowCount });
            })
                .catch((error) => {
                console.error("Error eliminando resultado:", error);
                res.status(400).json({ Mensaje: "Error eliminando resultado." });
            });
        });
    }
}
exports.default = resultadosDAO;
//# sourceMappingURL=resultadosDAO.js.map