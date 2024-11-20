"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listarProvController_1 = __importDefault(require("../../controller/proveedores/listarProvController"));
const crearProvController_1 = __importDefault(require("../../controller/proveedores/crearProvController"));
const eliminarProvController_1 = __importDefault(require("../../controller/proveedores/eliminarProvController"));
const editarProvController_1 = __importDefault(require("../../controller/proveedores/editarProvController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarTodosProv", listarProvController_1.default.ctrlListarTodosProv);
        this.rutasAPI.post("/crearProv", crearProvController_1.default.postProveedor);
        this.rutasAPI.delete("/eliminarProv/:id", eliminarProvController_1.default.borrarProveedor);
        this.rutasAPI.put("/editarProv", editarProvController_1.default.updateProveedor);
        /* ******************************************************************** */
        this.rutasAPI.get("/consulta3", listarProvController_1.default.ctrlconsulta3);
        this.rutasAPI.get("/consulta8", listarProvController_1.default.ctrlconsulta8);
        /* ******************************************************************** */
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasProveedores.js.map