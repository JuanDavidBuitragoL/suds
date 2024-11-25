INSERT INTO componentes (id_componente, nombre_componente, descripcion, photo, valor_amenidad, valor_cualitativo) VALUES
(1, 'Rainwater harvesting systems- Tanques de almacenamiento- Depósitos reticulares', NULL, NULL, NULL, NULL),
(2, 'Green roofs - Cubiertas verdes', NULL, NULL, NULL, NULL),
(3, 'Infiltration systems- Zanjas y pozos de infiltración', NULL, NULL, NULL, NULL),
(4, 'Infiltration systems- Balsa de infiltración', NULL, NULL, NULL, NULL),
(5, 'Filter strips - Franjas filtrantes', NULL, NULL, NULL, NULL),
(6, 'Filter drains- Drenajes filtrantes', NULL, NULL, NULL, NULL),
(7, 'Wet Swales- Cuneta vegetada seca', NULL, NULL, NULL, NULL),
(8, 'Dry Swales- Cuneta vegetada húmeda', NULL, NULL, NULL, NULL),
(9, 'Bioretention systems- Jardines de lluvia', NULL, NULL, NULL, NULL),
(10, 'Bioretention systems- Alcorques indundables o Alcorques estructurales', NULL, NULL, NULL, NULL),
(11, 'Pervious pavements', NULL, NULL, NULL, NULL),
(12, 'Attenuation storage tanks', NULL, NULL, NULL, NULL),
(13, 'Detention basins', NULL, NULL, NULL, NULL),
(14, 'Ponds and wetlands', NULL, NULL, NULL, NULL);

INSERT INTO criterios (id_criterio, nombre_criterio, descripcion, intensidad, valor_cuantitativo, valor_cualitativo, id_componente) VALUES
(1, 'Maximización de la multifuncionalidad', NULL, NULL, NULL, NULL, NULL),
(2, 'Mejora aspecto visual paisaje urbano o natural', NULL, NULL, NULL, NULL, NULL),
(3, 'Provisión sistemas gestión aguas superficiales seguros', NULL, NULL, NULL, NULL, NULL),
(4, 'Maximización de legibilidad claridad', NULL, NULL, NULL, NULL, NULL),
(5, 'Fomento aprendizaje medioambiental ciudadanía', NULL, NULL, NULL, NULL, NULL),
(6, 'Apoyo resiliencia adaptabilidad cambio futuro', NULL, NULL, NULL, NULL, NULL);


INSERT INTO indicadores (id_indicador, nombre_indicador, descripcion, id_criterio) VALUES
(1, 'Número variedad calidad usos adicionales áreas recreación aparcamientos etc', NULL, 1),
(2, 'Visualmente atractivos aportando valor apoyando patrimonio local carácter paisaje adecuada etc', NULL, 2),
(3, 'Consideraciones actividades mantenimiento preservación SUDS incluyan participación comunitaria', NULL, 2),
(4, 'Consideraciones seguridad uso SUDS diseñado bajo criterios multifuncionales', NULL, 3),
(5, 'El SUDS es visible y/o legible dentro del espacio público', NULL, 4),
(6, 'Grado extensión estrategias sensibilización ciudadana educación ciudadana etc', NULL, 5),
(7, 'SUDS con complemento permita hacer frente efectos cambio climático y desarrollo urbano', NULL, 6),
(8, 'SUDS contribuye desarrollo resiliencia ejm reducción necesidades climatización zonas', NULL, 6);
