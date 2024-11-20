"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ESTUDIANTES = void 0;
exports.SQL_ESTUDIANTES = {
    LISTAR_TODOS: "SELECT * FROM estudiantes",
    TEST: "SELECT 1",
    LISTAR_POR_ID: "SELECT * FROM estudiantes WHERE id_estudiante = $1",
    LISTAR_POR_NOMBRE: "SELECT * FROM estudiantes WHERE nombre = $1",
    LISTAR_POR_NOMBRE_AP: "SELECT * FROM estudiantes WHERE nombre = $1 AND apellidos = $2",
    LISTAR_EST_COL: "SELECT * FROM estudiantes estu INNER JOIN colegios col ON col.id_colegio = estu.id_colegio",
    CREAR: "INSERT INTO estudiantes (nombre, apellido, email, id_colegio) VALUES ($1, $2, $3, $4) RETURNING id_estudiante",
    VERIFICAR: "SELECT COUNT(id_estudiante) AS cantidad FROM estudiantes e WHERE lower(e.nombre) = lower($1)",
    ELIMINAR: "DELETE FROM estudiantes WHERE id_estudiante = $1",
    EDITAR: "UPDATE estudiantes SET nombre = $1, apellido = $2, email = $3, id_colegio = $4 WHERE id_estudiante = $5"
};
//# sourceMappingURL=estudiantesRepo.js.map