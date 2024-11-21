"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_INGENIEROS = void 0;
exports.SQL_INGENIEROS = {
    LISTAR_TODOS: "SELECT * FROM ingenieros ORDER BY id_ingeniero ASC",
    CREAR: "INSERT INTO ingenieros (id_usuario, id_proyecto,fecha) VALUES ($1,$2,$3) RETURNING id_ingeniero",
    ELIMINAR: "DELETE FROM ingenieros WHERE id_ingeniero = $1",
    EDITAR: "UPDATE ingenieros SET id_usuario = $1,id_proyecto = $2,fecha = $3 WHERE id_ingeniero = $4"
};
//# sourceMappingURL=ingenierosRepository.js.map