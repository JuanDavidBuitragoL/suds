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
const conexion_1 = __importDefault(require("../../../config/conection/conexion"));
class estudiantesDAO {
    static test(sql_estudiantes, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            conexion_1.default
                .one(sql_estudiantes)
                .then((respuesta) => {
                console.log(">>>>>" + respuesta);
                return res.status(200).json({
                    Mensaje: "FUNCIONO!!!!!!!!!...La base de datos dice -> ",
                    Respuesta: respuesta,
                });
            })
                .catch((errorcito) => {
                console.log("Exploto D:...", errorcito);
                res
                    .status(400)
                    .json({ Mensaje: "Error del test, comunique al admin pro" });
            });
        });
    }
    static listarTodos(sql_listar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sql_listar, parametros)
                .then((respuesta) => {
                console.log(">>>>>" + respuesta.rows);
                return res
                    .status(200)
                    .json({ Mensaje: "Estudiantes: ", Respuesta: respuesta.rows });
            })
                .catch((errorcito) => {
                console.log("Exploto D:...", errorcito);
                res.status(400).json({
                    Mensaje: "Error listando estudiantes, comunique al admin pro",
                });
            });
        });
    }
    static listarEstCol(sql_listar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sql_listar, parametros)
                .then((respuesta) => {
                console.log(">>>>>" + respuesta.rows);
                return res
                    .status(200)
                    .json({ Mensaje: "Estudiantes con colegio: ", Respuesta: respuesta.rows });
            })
                .catch((errorcito) => {
                console.log("Exploto D:...", errorcito);
                res.status(400).json({
                    Mensaje: "Error listando estudiantes/col, comunique al admin pro",
                });
            });
        });
    }
    static listarPorID(sql_listID, id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .one(sql_listID, id)
                .then((respuesta) => {
                console.log(">>>>>" + respuesta);
                return res
                    .status(200)
                    .json({
                    Mensaje: "Se encontro segun el id : ",
                    Respuesta: respuesta,
                    id: id,
                });
            })
                .catch((errorcito) => {
                console.log("Exploto D:...", errorcito);
                res.status(400).json({
                    Mensaje: "No hay informacion de ese ID",
                    id: id,
                });
            });
        });
    }
    static listarPorNombre(sql_listNombre, nombre, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .one(sql_listNombre, nombre)
                .then((respuesta) => {
                console.log(">>>>>" + respuesta);
                return res
                    .status(200)
                    .json({
                    Mensaje: "Se encontro segun el nombre : ",
                    Respuesta: respuesta,
                    nombre: nombre,
                });
            })
                .catch((errorcito) => {
                console.log("Exploto D:...", errorcito);
                res.status(400).json({
                    Mensaje: "No hay informacion de ese nombre",
                    nombre: nombre,
                });
            });
        });
    }
    static listarPorNomApe(sql_listNomApe, nombreApellidos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default // await: Indica que espere que devuelva algo antes de dar respuesta
                .result(sql_listNomApe, nombreApellidos)
                .then((respuesta) => {
                console.log(">>>>>" + respuesta.rows);
                return res
                    .status(200)
                    .json({
                    Mensaje: "Se encontro segun el nombre y apellido: ",
                    Respuesta: respuesta.rows,
                });
            })
                .catch((errorcito) => {
                console.log("Exploto D:...", errorcito);
                res.status(400).json({
                    Mensaje: "No hay informacion de ese nombre y/o apellidos",
                });
            });
        });
    }
}
exports.default = estudiantesDAO;
//# sourceMappingURL=estudiantesDAO.js.map