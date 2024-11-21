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
class criteriosDAO {
    static listarTodosCri(sql_listar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sql_listar, parametros)
                .then((respuesta) => {
                return res.status(200).json({ Mensaje: "Criterios:", Respuesta: respuesta.rows });
            })
                .catch((errorcito) => {
                console.error("Error listando criterios:", errorcito);
                res.status(400).json({ Mensaje: "Error listando criterios, contacte al admin." });
            });
        });
    }
    static crearCritero(sqlConfirmar, sqlCrear, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, params);
                if (dato.cantidad == 0) {
                    return yield consulta.one(sqlCrear, params);
                }
                else {
                    return { id_criterio: 0 };
                }
            })).then((respuesta) => {
                if (respuesta.id_criterio != 0) {
                    res.status(200).json({
                        Mensaje: "criterio creado",
                        nuevoCodigo: respuesta.id_criterio
                    });
                }
                else {
                    res.status(400).json({
                        Mensaje: "criterio no creado, puede estar repetido",
                    });
                }
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "criterio no creado",
                });
            });
        });
    }
    static editarCriterio(sqlActualizar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.result(sqlActualizar, params);
            }))
                .then(() => {
                res.status(200).json({ Mensaje: "Criterio actualizado." });
            })
                .catch((errorcito) => {
                console.error("Error actualizando criterio:", errorcito);
                res.status(400).json({ Mensaje: "Error actualizando criterio." });
            });
        });
    }
    static borrarCriterio(sqlBorrar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sqlBorrar, params)
                .then((respuesta) => {
                res.status(200).json({ Mensaje: "Criterio eliminado.", resultado: respuesta.rowCount });
            })
                .catch((errorcito) => {
                console.error("Error eliminando criterio:", errorcito);
                res.status(400).json({ Mensaje: "Error eliminando criterio." });
            });
        });
    }
}
exports.default = criteriosDAO;
//# sourceMappingURL=criteriosDAO.js.map