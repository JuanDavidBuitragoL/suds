"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CITAS = void 0;
exports.SQL_CITAS = {
    LISTAR_TODOS: "SELECT * FROM citas",
    CREAR: "INSERT INTO citas (fecha_cita, precio_cita, eps_cita, motivo_cita, id_paciente, id_doctor) VALUES ($1, $2, $3, $4, $5,$6) RETURNING id_cita",
    VERIFICAR: "SELECT COUNT(id_cita) AS cantidad FROM citas e WHERE e.fecha_cita = $1",
    ELIMINAR: "DELETE FROM citas WHERE id_cita = $1",
    EDITAR: "UPDATE citas SET fecha_cita = $1, precio_cita = $2, eps_cita = $3, motivo_cita = $4, id_paciente = $5, id_doctor = $6 WHERE id_cita = $7"
};
//# sourceMappingURL=citasRepository.js.map