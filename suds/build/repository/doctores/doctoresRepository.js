"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DOCTORES = void 0;
exports.SQL_DOCTORES = {
    LISTAR_TODOS: "SELECT * FROM doctores",
    CREAR: "INSERT INTO doctores ( nombre_doctor, apellido_doctor, especialidad_doctor, añosexperiencia_doctor) VALUES ($1, $2, $3, $4) RETURNING id_doctor",
    VERIFICAR: "SELECT COUNT(id_doctor) AS cantidad FROM doctores e WHERE lower(e.nombre_doctor) = lower($1)",
    ELIMINAR: "DELETE FROM doctores WHERE id_doctor = $1",
    EDITAR: "UPDATE doctores SET nombre_doctor = $1, apellido_doctor = $2, especialidad_doctor = $3, añosexperiencia_doctor = $4 WHERE id_doctor = $5",
    //CONSULTA4: Esta consulta devuelve el nombre del doctor, su especialidad y la fecha de todas las citas asociadas a ese doctor.
    CONSULTA4: "SELECT doctores.nombre_doctor, doctores.especialidad_doctor, citas.fecha_cita FROM doctores JOIN citas ON doctores.id_doctor = citas.id_doctor; ",
    //CONSULTA6: Mostrar la cantidad de  citas por cada doctor que hay
    CONSULTA6: "SELECT doctores.nombre_doctor, COUNT(citas.id_cita) as cantidad_citas FROM doctores LEFT JOIN citas ON doctores.id_doctor = citas.id_doctor GROUP BY doctores.nombre_doctor, doctores.id_doctor;",
    //CONSULTA14: CANTIDAD DE CITAS PARA EL DOCTOR QUE UD LE MANDE EN EL POST
    CONSULTA14: "SELECT * FROM doctores WHERE nombre_doctor = $1 AND apellido_doctor = $2",
};
//# sourceMappingURL=doctoresRepository.js.map