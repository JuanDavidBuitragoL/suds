"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_USUARIOS = void 0;
exports.SQL_USUARIOS = {
    LISTAR_TODOS: "SELECT * FROM usuarios",
    CREAR: "INSERT INTO usuarios (nombre_usuario, correo_usuario, password_usuario, nombres_usuario, apellidos_usuario) VALUES ($1, $2, $3, $4, $5) RETURNING id_usuario",
    VERIFICAR: "SELECT COUNT(id_usuario) AS cantidad FROM usuarios e WHERE lower(e.nombre_usuario) = lower($1)",
    ELIMINAR: "DELETE FROM usuarios WHERE id_usuario = $1",
    EDITAR: "UPDATE usuarios SET nombre_usuario = $1, correo_usuario = $2, password_usuario = $3, nombres_usuario = $4, apellidos_usuario = $5 WHERE id_usuario = $6"
};
//# sourceMappingURL=usuariosRepository.js.map