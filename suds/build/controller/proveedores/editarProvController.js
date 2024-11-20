"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editarProvDAO_1 = __importDefault(require("../../dao/proveedores/actualizarDAO/editarProvDAO"));
const proveedorRepository_1 = require("../../repository/proveedores/proveedorRepository");
class editarProvController extends editarProvDAO_1.default {
    updateProveedor(req, res) {
        const { nombre_proveedor, telefono_proveedor, correo_proveedor, id_proveedor } = req.body;
        const datos = [nombre_proveedor, telefono_proveedor, correo_proveedor, id_proveedor];
        editarProvController.editarProveedor(proveedorRepository_1.SQL_PROVEEDORES.EDITAR, datos, res);
    }
}
const ctrlEditarProv = new editarProvController();
exports.default = ctrlEditarProv;
//# sourceMappingURL=editarProvController.js.map