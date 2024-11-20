"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_COLEGIOS = void 0;
exports.SQL_COLEGIOS = {
    LISTAR_TODOS: "SELECT * FROM colegios",
    LISTAR_POR_ID: "SELECT * FROM colegios WHERE id_colegios = $1",
    LISTAR_POR_NOMBRE: "SELECT * FROM colegios WHERE nombre = $1",
    CONTAR_COL: "SELECT COUNT(colegios) AS Cantidad FROM colegios"
};
//# sourceMappingURL=colegiosRepo.js.map