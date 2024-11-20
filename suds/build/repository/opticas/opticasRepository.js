"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_OPTICAS = void 0;
exports.SQL_OPTICAS = {
    LISTAR_TODOS: "SELECT * FROM opticas",
    CREAR: "INSERT INTO opticas ( nombre_optica, direccion_optica, id_usuario, id_paciente) VALUES ($1, $2, $3, $4) RETURNING id_optica",
    VERIFICAR: "SELECT COUNT(id_optica) AS cantidad FROM opticas e WHERE lower(e.nombre_optica) = lower($1)",
    ELIMINAR: "DELETE FROM opticas WHERE id_optica = $1",
    EDITAR: "UPDATE opticas SET nombre_optica = $1, direccion_optica = $2, id_usuario = $3, id_paciente = $4 WHERE id_optica = $5",
    //CONSULTA7: Mostrar la cantidad de pacientes por optica
    CONSULTA7: "SELECT opticas.nombre_optica, COUNT(pacientes.id_paciente) as cantidad_pacientes FROM opticas LEFT JOIN pacientes ON opticas.id_paciente = pacientes.id_paciente GROUP BY opticas.nombre_optica; ",
    //CONSULTA9: Mostrar la cantidad de proveedores por optica 
    CONSULTA9: "SELECT o.id_optica, o.nombre_optica, COUNT(p.id_proveedor) AS cantidad_proveedores FROM opticas o LEFT JOIN proveedores_opticas po ON o.id_optica = po.id_optica LEFT JOIN proveedores p ON po.id_proveedor = p.id_proveedor GROUP BY o.id_optica, o.nombre_optica; "
};
//# sourceMappingURL=opticasRepository.js.map