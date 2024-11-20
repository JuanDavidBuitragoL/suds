"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarCitDAO_1 = __importDefault(require("../../dao/citas/elminarDAO/eliminarCitDAO"));
const citasRepository_1 = require("../../repository/citas/citasRepository");
class eliminarCitController extends eliminarCitDAO_1.default {
    borrarCita(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        eliminarCitController.borrarPorId(citasRepository_1.SQL_CITAS.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarCit = new eliminarCitController();
exports.default = ctrlEliminarCit;
//# sourceMappingURL=eliminarCitController.js.map