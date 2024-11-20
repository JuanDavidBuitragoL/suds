"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarProvDAO_1 = __importDefault(require("../../dao/proveedores/elminarDAO/eliminarProvDAO"));
const proveedorRepository_1 = require("../../repository/proveedores/proveedorRepository");
class eliminarProvController extends eliminarProvDAO_1.default {
    borrarProveedor(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        eliminarProvController.borrarPorId(proveedorRepository_1.SQL_PROVEEDORES.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarProv = new eliminarProvController();
exports.default = ctrlEliminarProv;
//# sourceMappingURL=eliminarProvController.js.map