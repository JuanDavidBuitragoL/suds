"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarProvOptDAO_1 = __importDefault(require("../../dao/proveedores_opticas/elminarDAO/eliminarProvOptDAO"));
const proveedores_opticasRepository_1 = require("../../repository/proveedores_opticas/proveedores_opticasRepository");
class eliminarProvOptController extends eliminarProvOptDAO_1.default {
    borrarProvOpt(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        eliminarProvOptController.borrarPorId(proveedores_opticasRepository_1.SQL_PROVEEDORES_OPTICAS.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarProvOpt = new eliminarProvOptController();
exports.default = ctrlEliminarProvOpt;
//# sourceMappingURL=eliminarProvOptController.js.map