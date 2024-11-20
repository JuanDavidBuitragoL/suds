"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarOptDAO_1 = __importDefault(require("../../dao/opticas/elminarDAO/eliminarOptDAO"));
const opticasRepository_1 = require("../../repository/opticas/opticasRepository");
class eliminarOptController extends eliminarOptDAO_1.default {
    borrarOptica(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        eliminarOptController.borrarPorId(opticasRepository_1.SQL_OPTICAS.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarOpt = new eliminarOptController();
exports.default = ctrlEliminarOpt;
//# sourceMappingURL=eliminarOptController.js.map