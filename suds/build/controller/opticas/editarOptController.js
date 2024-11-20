"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editarOptDAO_1 = __importDefault(require("../../dao/opticas/actualizarDAO/editarOptDAO"));
const opticasRepository_1 = require("../../repository/opticas/opticasRepository");
class editarOptController extends editarOptDAO_1.default {
    updateOptica(req, res) {
        const { nombre_optica, direccion_optica, id_usuario, id_paciente, id_optica } = req.body;
        const datos = [nombre_optica, direccion_optica, id_usuario, id_paciente, id_optica];
        editarOptController.editarOptica(opticasRepository_1.SQL_OPTICAS.EDITAR, datos, res);
    }
}
const ctrlEditarOpt = new editarOptController();
exports.default = ctrlEditarOpt;
//# sourceMappingURL=editarOptController.js.map