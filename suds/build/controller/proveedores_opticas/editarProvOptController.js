"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editarProvOptDAO_1 = __importDefault(require("../../dao/proveedores_opticas/actualizarDAO/editarProvOptDAO"));
const proveedores_opticasRepository_1 = require("../../repository/proveedores_opticas/proveedores_opticasRepository");
class editarProvOptController extends editarProvOptDAO_1.default {
    updateProvOpt(req, res) {
        const { id_proveedor, id_optica } = req.body;
        const datos = [id_proveedor, id_optica];
        editarProvOptController.editarProvOpt(proveedores_opticasRepository_1.SQL_PROVEEDORES_OPTICAS.EDITAR, datos, res);
    }
}
const ctrlEditarProvOpt = new editarProvOptController();
exports.default = ctrlEditarProvOpt;
//# sourceMappingURL=editarProvOptController.js.map