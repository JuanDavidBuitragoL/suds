"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarDocDAO_1 = __importDefault(require("../../dao/doctores/eliminarDAO/eliminarDocDAO"));
const doctoresRepository_1 = require("../../repository/doctores/doctoresRepository");
class eliminarDocController extends eliminarDocDAO_1.default {
    borrarDoctor(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        eliminarDocController.borrarPorId(doctoresRepository_1.SQL_DOCTORES.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarDoc = new eliminarDocController();
exports.default = ctrlEliminarDoc;
//# sourceMappingURL=eliminarDocController.js.map