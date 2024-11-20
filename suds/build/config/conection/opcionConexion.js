"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcionesPG = void 0;
const funcionConexion_1 = require("./funcionConexion");
exports.opcionesPG = {
    receive(data) {
        (0, funcionConexion_1.camelizeColumns)(data);
    },
};
//# sourceMappingURL=opcionConexion.js.map