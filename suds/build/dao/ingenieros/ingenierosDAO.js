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
class ingenierosDAO {
    static listarIngenieros(sql_listar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sql_listar, parametros)
                .then((respuesta) => {
                console.log(">>>>>" + respuesta.rows);
                return res.status(200).json({ Mensaje: "Ingenieros: ", Respuesta: respuesta.rows });
            })
                .catch((error) => {
                console.log("Exploto D:...", error);
                res.status(400).json({ Mensaje: "Error listando Ingenieros, comunique al administrador" });
            });
        });
    }
    static crearIngeniero(sqlCrear, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.one(sqlCrear, params);
            })).then((respuesta) => {
                if (respuesta.id_proyecto != 0) {
                    res.status(200).json({
                        Mensaje: "Ingeniero cread@",
                        nuevoCodigo: respuesta.id_proyecto
                    });
                }
                else {
                    res.status(400).json({
                        Mensaje: "Ingeniero no cread@, puede estar repetid@",
                    });
                }
            }).catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "Ingeniero no cread@",
                });
            });
        });
    }
    static editarIngeniero(sqlActualizar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.result(sqlActualizar, params);
            }))
                .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({
                    respuesta: "Ingeniero actualizad@ ",
                });
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "Ingeniero no actualizad@",
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
                    Mensaje: "Ingeniero borrad@",
                    resultado: dato.rowCount,
                });
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "Error eliminando Ingeniero...",
                });
            });
        });
    }
}
exports.default = ingenierosDAO;
//# sourceMappingURL=ingenierosDAO.js.map