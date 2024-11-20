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
class listarCitDAO {
    static listarTodosOpt(sql_listar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sql_listar, parametros)
                .then((respuesta) => {
                console.log(">>>>>" + respuesta.rows);
                return res
                    .status(200)
                    .json({ Mensaje: "Citas: ", Respuesta: respuesta.rows });
            })
                .catch((errorcito) => {
                console.log("Exploto D:...", errorcito);
                res.status(400).json({
                    Mensaje: "Error listando Citas, comunique al admin pro",
                });
            });
        });
    }
}
exports.default = listarCitDAO;
//# sourceMappingURL=listarCitDAO.js.map