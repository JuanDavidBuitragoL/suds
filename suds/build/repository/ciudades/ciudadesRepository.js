"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CIUDADES = void 0;
exports.SQL_CIUDADES = {
    LISTAR_TODOS: "SELECT * FROM ciudades",
    CREAR: "INSERT INTO ciudades (nombre_ciudad) VALUES ($1) RETURNING id_ciudad",
    VERIFICAR: "SELECT COUNT(id_ciudad) AS cantidad FROM ciudades e WHERE lower(e.nombre_ciudad) = lower($1)",
    ELIMINAR: "DELETE FROM ciudades WHERE id_ciudad = $1",
    EDITAR: "UPDATE ciudades SET nombre_ciudad = $1 WHERE id_ciudad = $2"
};
//# sourceMappingURL=ciudadesRepository.js.map