"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_INDICADORES = void 0;
exports.SQL_INDICADORES = {
    LISTAR_TODOS: "SELECT * FROM indicadores ORDER BY id_indicador ASC",
    CREAR: "INSERT INTO indicadores (nombre_indicador, descripcion,id_criterio) VALUES ($1,$2,$3) RETURNING id_indicador",
    VERIFICAR: "SELECT COUNT(id_indicador) AS cantidad FROM indicadores i WHERE i.nombre_indicador = $1",
    ELIMINAR: "DELETE FROM indicadores WHERE id_indicador = $1",
    EDITAR: "UPDATE indicadores SET nombre_indicador = $1,descripcion = $2,id_criterio = $3 WHERE id_indicador = $4"
};
//# sourceMappingURL=indicadoresRespoitory.js.map