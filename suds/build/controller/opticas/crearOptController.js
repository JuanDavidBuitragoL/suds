"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crearOptDAO_1 = __importDefault(require("../../dao/opticas/crearDAO/crearOptDAO"));
const opticasRepository_1 = require("../../repository/opticas/opticasRepository");
class crearOptController extends crearOptDAO_1.default {
    postOptica(req, res) {
        const { nombre_optica, direccion_optica, id_usuario, id_paciente } = req.body;
        const datos = [nombre_optica, direccion_optica, id_usuario, id_paciente];
        crearOptController.crearOptica(opticasRepository_1.SQL_OPTICAS.VERIFICAR, opticasRepository_1.SQL_OPTICAS.CREAR, datos, res);
    }
}
const ctrlCrearOpt = new crearOptController();
exports.default = ctrlCrearOpt;
//# sourceMappingURL=crearOptController.js.map