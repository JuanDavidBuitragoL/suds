"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crearDocDAO_1 = __importDefault(require("../../dao/doctores/crearDAO/crearDocDAO"));
const doctoresRepository_1 = require("../../repository/doctores/doctoresRepository");
class crearDocController extends crearDocDAO_1.default {
    postDoctor(req, res) {
        const { nombre_doctor, apellido_doctor, especialidad_doctor, añosexperiencia_doctor } = req.body;
        const datos = [nombre_doctor, apellido_doctor, especialidad_doctor, añosexperiencia_doctor];
        crearDocController.crearDoctor(doctoresRepository_1.SQL_DOCTORES.VERIFICAR, doctoresRepository_1.SQL_DOCTORES.CREAR, datos, res);
    }
}
const ctrlCrearDoc = new crearDocController();
exports.default = ctrlCrearDoc;
//# sourceMappingURL=crearDocController.js.map