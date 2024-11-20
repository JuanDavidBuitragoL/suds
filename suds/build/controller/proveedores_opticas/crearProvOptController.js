"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crearEstuDAO_1 = __importDefault(require("../../dao/proveedores_opticas/crearDAO/crearEstuDAO"));
const proveedores_opticasRepository_1 = require("../../repository/proveedores_opticas/proveedores_opticasRepository");
class crearProvOptController extends crearEstuDAO_1.default {
    postProvOpt(req, res) {
        const { id_proveedor } = req.body;
        const datos = [id_proveedor];
        crearProvOptController.crearProvOpt(proveedores_opticasRepository_1.SQL_PROVEEDORES_OPTICAS.VERIFICAR, proveedores_opticasRepository_1.SQL_PROVEEDORES_OPTICAS.CREAR, datos, res);
    }
}
const ctrlCrearProvOpt = new crearProvOptController();
exports.default = ctrlCrearProvOpt;
//# sourceMappingURL=crearProvOptController.js.map