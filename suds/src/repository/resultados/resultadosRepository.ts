export const SQL_RESULTADOS = {
    LISTAR_TODOS: `SELECT 
    r.id_resultado,
    r.nombre_resultado,
    r.descripcion,
    r.valor_cualitativo,
    r.valor_cuantitativo,
    r.fecha,
    e.nombre_escala,
    p.nombre,
    r.id_ingeniero,
    c.nombre_componente,
    cr.nombre_criterio,
    ind.nombre_indicador
FROM 
    resultados r
LEFT JOIN 
    escalas e ON r.id_escala = e.id_escala
LEFT JOIN 
    proyectos p ON r.id_proyecto = p.id_proyecto
LEFT JOIN 
    ingenieros i ON r.id_ingeniero = i.id_ingeniero
LEFT JOIN 
    componentes c ON r.id_componente = c.id_componente
LEFT JOIN 
    criterios cr ON r.id_criterio = cr.id_criterio
LEFT JOIN 
    indicadores ind ON r.id_indicador = ind.id_indicador;`,
    CREAR: `INSERT INTO resultados (nombre_resultado, descripcion, valor_cualitativo, valor_cuantitativo, fecha, id_escala, id_proyecto, id_ingeniero, id_componente,id_criterio,id_indicador) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9,$10,$11) RETURNING id_resultado`,
    VERIFICAR: "SELECT COUNT(id_resultado) AS cantidad FROM resultados WHERE lower(nombre_resultado) = lower($1)",
    ELIMINAR: "DELETE FROM resultados WHERE id_resultado = $1",
    EDITAR: `UPDATE resultados SET nombre_resultado = $1, descripcion = $2, valor_cualitativo = $3, valor_cuantitativo = $4, fecha = $5, 
             id_escala = $6, id_proyecto = $7, id_ingeniero = $8, id_componente =$9,id_criterio=$10,id_indicador =$11 WHERE id_resultado = $12`
};
