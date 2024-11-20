"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editarCiuDAO_1 = __importDefault(require("../../dao/ciudades/actualizarDAO/editarCiuDAO"));
const ciudadesRepository_1 = require("../../repository/ciudades/ciudadesRepository");
class editarCiuController extends editarCiuDAO_1.default {
    updateCiudad(req, res) {
        const { nombre_ciudad, id_ciudad } = req.body;
        const datos = [nombre_ciudad, id_ciudad];
        editarCiuController.editarCiudad(ciudadesRepository_1.SQL_CIUDADES.EDITAR, datos, res);
    }
}
const ctrlEditarCiu = new editarCiuController();
exports.default = ctrlEditarCiu;
//# sourceMappingURL=editarCiuController.js.map