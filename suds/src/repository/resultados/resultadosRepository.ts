export const SQL_RESULTADOS = {
    LISTAR_TODOS: "SELECT * FROM resultados",
    CREAR: `INSERT INTO resultados (nombre_resultado, descripcion, valor_cualitativo, valor_cuantitativo, fecha, id_escala, id_proyecto, id_ingeniero) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id_resultado`,
    VERIFICAR: "SELECT COUNT(id_resultado) AS cantidad FROM resultados WHERE lower(nombre_resultado) = lower($1)",
    ELIMINAR: "DELETE FROM resultados WHERE id_resultado = $1",
    EDITAR: `UPDATE resultados SET nombre_resultado = $1, descripcion = $2, valor_cualitativo = $3, valor_cuantitativo = $4, fecha = $5, 
             id_escala = $6, id_proyecto = $7, id_ingeniero = $8 WHERE id_resultado = $9`
};
