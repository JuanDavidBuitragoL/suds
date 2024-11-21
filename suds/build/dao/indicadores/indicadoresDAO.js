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
class indicadoresDAO {
    static listarIndicadores(sql_listar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sql_listar, parametros)
                .then((respuesta) => {
                console.log(">>>>>" + respuesta.rows);
                return res.status(200).json({ Mensaje: "Indicadores: ", Respuesta: respuesta.rows });
            })
                .catch((error) => {
                console.log("Exploto D:...", error);
                res.status(400).json({ Mensaje: "Error listando Indicadores, comunique al administrador" });
            });
        });
    }
    static crearIndicador(sqlConfirmar, sqlCrear, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, params);
                if (dato.cantidad == 0) {
                    return yield consulta.one(sqlCrear, params);
                }
                else {
                    return { id_indicador: 0 };
                }
            })).then((respuesta) => {
                if (respuesta.id_indicador != 0) {
                    res.status(200).json({
                        Mensaje: "Indicador cread@",
                        nuevoCodigo: respuesta.id_indicador
                    });
                }
                else {
                    res.status(400).json({
                        Mensaje: "Indicador no cread@, puede estar repetid@",
                    });
                }
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "Indicador no cread@",
                });
            });
        });
    }
    static editarIndicador(sqlActualizar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.result(sqlActualizar, params);
            }))
                .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({
                    respuesta: "Indicador actualizad@ ",
                });
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "Indicador no actualizad@",
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
                    Mensaje: "Indicador borrad@",
                    resultado: dato.rowCount,
                });
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "Error eliminando Indicador...",
                });
            });
        });
    }
}
exports.default = indicadoresDAO;
//# sourceMappingURL=indicadoresDAO.js.map