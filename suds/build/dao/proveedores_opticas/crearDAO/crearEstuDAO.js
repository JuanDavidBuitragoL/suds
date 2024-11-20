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
class crearProvOptDAO {
    static crearProvOpt(sqlConfirmar, sqlCrear, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, params);
                if (dato.cantidad == 0) {
                    return yield consulta.one(sqlCrear, params);
                }
                else {
                    return { id_proveedor: 0, id_optica: 0 };
                }
            })).then((respuesta) => {
                if (respuesta.id_proveedor != 0, respuesta.id_optica != 0) {
                    res.status(200).json({
                        Mensaje: "Proveedores_Opticas creado",
                        nuevoCodigo: respuesta.id_proveedor || respuesta.id_optica
                    });
                }
                else {
                    res.status(400).json({
                        Mensaje: "Proveedores_Opticas no creado, puede estar repetido",
                    });
                }
            })
                .catch((mierror) => {
                console.log("Error", mierror);
                res.status(400).json({
                    Respuesta: "Proveedores_Opticas no creado",
                });
            });
        });
    }
}
exports.default = crearProvOptDAO;
//# sourceMappingURL=crearEstuDAO.js.map