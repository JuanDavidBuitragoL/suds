"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PACIENTES = void 0;
exports.SQL_PACIENTES = {
    LISTAR_TODOS: "SELECT * FROM pacientes",
    CREAR: "INSERT INTO pacientes (identificacion_paciente, nombre_paciente, apellido_paciente, fechanacimiento_paciente, direccion_paciente, id_ciudad) VALUES ($1, $2, $3, $4,$5,$6) RETURNING id_paciente",
    VERIFICAR: "SELECT COUNT(id_paciente) AS cantidad FROM pacientes e WHERE e.identificacion_paciente = $1",
    ELIMINAR: "DELETE FROM pacientes WHERE id_paciente = $1",
    EDITAR: "UPDATE pacientes SET identificacion_paciente = $1, nombre_paciente = $2, apellido_paciente = $3, fechanacimiento_paciente = $4,direccion_paciente = $5, id_ciudad = $6 WHERE id_paciente = $7",
    //CONSULTA2: Esta consulta devuelve la identificacion,el nombre del paciente, la fecha y motivo de todas sus citas.
    CONSULTA2: "SELECT pacientes.identificacion_paciente,pacientes.nombre_paciente, citas.fecha_cita, citas.motivo_cita FROM pacientes JOIN citas ON pacientes.id_paciente = citas.id_paciente",
    //CONSULTA10: Mostrar cantidad de citas por paciente
    CONSULTA10: "SELECT p.id_paciente, p.nombre_paciente, p.apellido_paciente, COUNT(c.id_cita) AS cantidad_citas FROM pacientes p LEFT JOIN citas c ON p.id_paciente = c.id_paciente GROUP BY p.id_paciente, p.nombre_paciente, p.apellido_paciente; ",
    //CONSULTA11: Mostrar cantidad de pacientes por eps
    CONSULTA11: "SELECT ciudades.nombre_ciudad, COUNT(pacientes.id_paciente) AS numero_de_pacientes FROM pacientes JOIN ciudades ON pacientes.id_ciudad = ciudades.id_ciudad GROUP BY ciudades.nombre_ciudad; ",
    //CONSULTA12: Mostrar cantidad de pacientes por eps
    CONSULTA12: "SELECT citas.eps_cita, COUNT(pacientes.id_paciente) AS numero_de_pacientes FROM pacientes JOIN citas ON pacientes.id_paciente = citas.id_paciente GROUP BY citas.eps_cita;",
    //CONSULTA13: Mostrar edad de los pacientes y nombre de la ciudad
    CONSULTA13: "SELECT pacientes.identificacion_paciente,pacientes.nombre_paciente, pacientes.apellido_paciente, EXTRACT(YEAR FROM AGE(CURRENT_DATE, pacientes.fechanacimiento_paciente)) AS edad, ciudades.nombre_ciudad FROM pacientes JOIN ciudades ON pacientes.id_ciudad = ciudades.id_ciudad;  ",
    //CONSULTA15: Mostrar paciente segun la identificacion
    CONSULTA15: "SELECT * FROM pacientes WHERE identificacion_paciente = $1",
};
//# sourceMappingURL=pacientesRepository.js.map