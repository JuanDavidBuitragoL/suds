"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crearProvDAO_1 = __importDefault(require("../../dao/proveedores/crearDAO/crearProvDAO"));
const proveedorRepository_1 = require("../../repository/proveedores/proveedorRepository");
class crearProvController extends crearProvDAO_1.default {
    postProveedor(req, res) {
        const { nombre_proveedor, telefono_proveedor, correo_proveedor } = req.body;
        const datos = [nombre_proveedor, telefono_proveedor, correo_proveedor];
        crearProvController.crearProveedor(proveedorRepository_1.SQL_PROVEEDORES.VERIFICAR, proveedorRepository_1.SQL_PROVEEDORES.CREAR, datos, res);
    }
}
const ctrlCrearProv = new crearProvController();
exports.default = ctrlCrearProv;
//# sourceMappingURL=crearProvController.js.map