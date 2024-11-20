"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listarProduController_1 = __importDefault(require("../../controller/productos/listarProduController"));
const crearProduController_1 = __importDefault(require("../../controller/productos/crearProduController"));
const eliminarProduController_1 = __importDefault(require("../../controller/productos/eliminarProduController"));
const editarProduController_1 = __importDefault(require("../../controller/productos/editarProduController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarTodosProdu", listarProduController_1.default.ctrlListarTodosProdu);
        this.rutasAPI.post("/crearProdu", crearProduController_1.default.postProducto);
        this.rutasAPI.delete("/eliminarProdu/:id", eliminarProduController_1.default.borrarProducto);
        this.rutasAPI.put("/editarProdu", editarProduController_1.default.updateProducto);
        /* ******************************************************************** */
        this.rutasAPI.get("/consulta1", listarProduController_1.default.ctrlConsulta1);
        this.rutasAPI.get("/consulta5", listarProduController_1.default.ctrlConsulta5);
        /* ******************************************************************** */
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasProductos.js.map