"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listarProvOptController_1 = __importDefault(require("../../controller/proveedores_opticas/listarProvOptController"));
const crearProvOptController_1 = __importDefault(require("../../controller/proveedores_opticas/crearProvOptController"));
const eliminarProvOptController_1 = __importDefault(require("../../controller/proveedores_opticas/eliminarProvOptController"));
const editarProvOptController_1 = __importDefault(require("../../controller/proveedores_opticas/editarProvOptController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarTodosProvOpt", listarProvOptController_1.default.ctrlListarTodosProvOpt);
        this.rutasAPI.post("/crearProvOpt", crearProvOptController_1.default.postProvOpt);
        this.rutasAPI.delete("/eliminarProvOpt/:id", eliminarProvOptController_1.default.borrarProvOpt);
        this.rutasAPI.put("/editarProvOpt", editarProvOptController_1.default.updateProvOpt);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasProvOpt.js.map