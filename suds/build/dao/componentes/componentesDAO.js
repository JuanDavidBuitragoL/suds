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
class componentesDAO {
    static listarTodosCom(sql_listar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sql_listar, parametros)
                .then((respuesta) => {
                return res.status(200).json({ Mensaje: "Componentes:", Respuesta: respuesta.rows });
            })
                .catch((errorcito) => {
                console.error("Error listando componentes:", errorcito);
                res.status(400).json({ Mensaje: "Error listando componentes, contacte al admin." });
            });
        });
    }
    static crearComponente(sqlConfirmar, sqlCrear, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, params);
                if (dato.cantidad == 0) {
                    return yield consulta.one(sqlCrear, params);
                }
                else {
                    return { id_componente: 0 };
                }
            })).then((respuesta) => {
                if (respuesta.id_componente != 0) {
                    res.status(200).json({
                        Mensaje: "componente creado",
                        nuevoCodigo: respuesta.id_componente
                    });
                }
                else {
                    res.status(400).json({
                        Mensaje: "componente no creado, puede estar repetido",
                    });
                }
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "componente no creado",
                });
            });
        });
    }
    static editarComponente(sqlActualizar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.result(sqlActualizar, params);
            }))
                .then(() => {
                res.status(200).json({ Mensaje: "Componente actualizado." });
            })
                .catch((errorcito) => {
                console.error("Error actualizando componente:", errorcito);
                res.status(400).json({ Mensaje: "Error actualizando componente." });
            });
        });
    }
    static borrarComponente(sqlBorrar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sqlBorrar, params)
                .then((respuesta) => {
                res.status(200).json({ Mensaje: "Componente eliminado.", resultado: respuesta.rowCount });
            })
                .catch((errorcito) => {
                console.error("Error eliminando componente:", errorcito);
                res.status(400).json({ Mensaje: "Error eliminando componente." });
            });
        });
    }
}
exports.default = componentesDAO;
//# sourceMappingURL=componentesDAO.js.map