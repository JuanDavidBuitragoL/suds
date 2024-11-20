"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarCiuDAO_1 = __importDefault(require("../../dao/ciudades/eliminarDAO/eliminarCiuDAO"));
const ciudadesRepository_1 = require("../../repository/ciudades/ciudadesRepository");
class eliminarCiuController extends eliminarCiuDAO_1.default {
    borrarCiu(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        eliminarCiuController.borrarPorId(ciudadesRepository_1.SQL_CIUDADES.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarCiu = new eliminarCiuController();
exports.default = ctrlEliminarCiu;
//# sourceMappingURL=eliminarCiuController.js.map