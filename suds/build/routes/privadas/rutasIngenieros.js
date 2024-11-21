"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingenierosController_1 = __importDefault(require("../../controller/ingenieros/ingenierosController"));
class Rutas {
    constructor() {
        this.rutasAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutas();
    }
    rutas() {
        this.rutasAPI.get("/listarIngenieros", ingenierosController_1.default.listarIngenieros);
        this.rutasAPI.post("/crearIngeniero", ingenierosController_1.default.crearIngeniero);
        this.rutasAPI.delete("/eliminarIngeniero/:id", ingenierosController_1.default.borrarIngeniero);
        this.rutasAPI.put("/editarIngeniero/:id_ingeniero", ingenierosController_1.default.updateIngeniero);
    }
}
const misRutas = new Rutas();
exports.default = misRutas.rutasAPI;
//# sourceMappingURL=rutasIngenieros.js.map