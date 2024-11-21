export const SQL_ESCALAS = {
    LISTAR_TODOS:"SELECT * FROM escalas ORDER BY id_escala ASC",
    CREAR: "INSERT INTO escalas (nombre_escala, descripcion,intensidad, peso, id_indicador) VALUES ($1,$2,$3,$4,$5) RETURNING id_escala",
    VERIFICAR: "SELECT COUNT(id_escala) AS cantidad FROM escalas e WHERE e.nombre_escala = $1",
    ELIMINAR: "DELETE FROM escalas WHERE id_escala = $1",
    EDITAR: "UPDATE escalas SET nombre_escala = $1,descripcion = $2,intensidad = $3,peso =$4, id_indicador = $5 WHERE id_escala = $6"
}