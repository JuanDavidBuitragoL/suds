"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CRITERIOS = void 0;
exports.SQL_CRITERIOS = {
    LISTAR_TODOS: "SELECT * FROM criterios",
    CREAR: "INSERT INTO criterios (nombre_criterio, descripcion, intensidad, valor_cuantitativo, valor_cualitativo, id_componente) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_criterio",
    VERIFICAR: "SELECT COUNT(id_criterio) AS cantidad FROM criterios WHERE lower(nombre_criterio) = lower($1)",
    ELIMINAR: "DELETE FROM criterios WHERE id_criterio = $1",
    EDITAR: "UPDATE criterios SET nombre_criterio = $1, descripcion = $2, intensidad = $3, valor_cuantitativo = $4, valor_cualitativo = $5, id_componente = $6 WHERE id_criterio = $7"
};
//# sourceMappingURL=criteriosRepository.js.map