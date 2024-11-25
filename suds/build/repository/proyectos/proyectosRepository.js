"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROYECTOS = void 0;
exports.SQL_PROYECTOS = {
    LISTAR_TODOS: "SELECT * FROM proyectos",
    CREAR: "INSERT INTO proyectos (nombre, fecha_realizacion, amenidad, localizacion, geolocalizacion, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_proyecto",
    VERIFICAR: "SELECT COUNT(id_proyecto) AS cantidad FROM proyectos WHERE lower(nombre) = lower($1)",
    ELIMINAR: "DELETE FROM proyectos WHERE id_proyecto = $1",
    EDITAR: "UPDATE proyectos SET nombre = $1, fecha_realizacion = $2, amenidad = $3, localizacion = $4, geolocalizacion = $5, photo = $6 WHERE id_proyecto = $7",
};
//# sourceMappingURL=proyectosRepository.js.map