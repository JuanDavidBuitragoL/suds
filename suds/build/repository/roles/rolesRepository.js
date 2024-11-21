"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ROLES = void 0;
exports.SQL_ROLES = {
    LISTAR_TODOS: "SELECT * FROM roles ORDER BY id_rol ASC",
    CREAR: "INSERT INTO roles (nombre_rol) VALUES ($1) RETURNING id_rol",
    VERIFICAR: "SELECT COUNT(id_rol) AS cantidad FROM roles r WHERE r.nombre_rol = $1",
    ELIMINAR: "DELETE FROM roles WHERE id_rol = $1",
    EDITAR: "UPDATE roles SET nombre_rol = $1 WHERE id_rol = $2"
};
//# sourceMappingURL=rolesRepository.js.map