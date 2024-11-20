"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROVEEDORES_OPTICAS = void 0;
exports.SQL_PROVEEDORES_OPTICAS = {
    LISTAR_TODOS: "SELECT * FROM proveedores_opticas",
    CREAR: "INSERT INTO proveedores_opticas ( id_proveedor, id_optica ) VALUES ($1, $2) RETURNING id_proveedor AND id_optica",
    VERIFICAR: "SELECT COUNT(id_proveedor AND id_optica) AS cantidad FROM proveedores_opticas e WHERE lower(e.id_proveedor) = lower($1)",
    ELIMINAR: "DELETE FROM proveedores_opticas WHERE id_optica = $1",
    EDITAR: "UPDATE proveedores_opticas SET id_proveedor = $1 WHERE id_optica = $2"
};
//# sourceMappingURL=proveedores_opticasRepository.js.map