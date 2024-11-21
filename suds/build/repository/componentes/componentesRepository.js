"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_COMPONENTES = void 0;
exports.SQL_COMPONENTES = {
    LISTAR_TODOS: "SELECT * FROM componentes",
    CREAR: "INSERT INTO componentes (nombre_componente, descripcion, photo, valor_amenidad, valor_cualitativo) VALUES ($1, $2, $3, $4, $5) RETURNING id_componente",
    VERIFICAR: "SELECT COUNT(id_componente) AS cantidad FROM componentes WHERE lower(nombre_componente) = lower($1)",
    ELIMINAR: "DELETE FROM componentes WHERE id_componente = $1",
    EDITAR: "UPDATE componentes SET nombre_componente = $1, descripcion = $2, photo = $3, valor_amenidad = $4, valor_cualitativo = $5 WHERE id_componente = $6"
};
//# sourceMappingURL=componentesRepository.js.map