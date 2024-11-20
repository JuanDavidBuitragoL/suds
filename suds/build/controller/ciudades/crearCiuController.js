"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crearCiuDAO_1 = __importDefault(require("../../dao/ciudades/crearDAO/crearCiuDAO"));
const ciudadesRepository_1 = require("../../repository/ciudades/ciudadesRepository");
class crearCiuController extends crearCiuDAO_1.default {
    postCiudad(req, res) {
        const { nombre_ciudad, id_ciudad } = req.body;
        const datos = [nombre_ciudad, id_ciudad];
        crearCiuController.crearCiudad(ciudadesRepository_1.SQL_CIUDADES.VERIFICAR, ciudadesRepository_1.SQL_CIUDADES.CREAR, datos, res);
    }
}
const ctrlCrearCiu = new crearCiuController();
exports.default = ctrlCrearCiu;
//# sourceMappingURL=crearCiuController.js.map