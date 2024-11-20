# Taller

Implementar una nueva tabla que se llame colegios y que tenga los siguientes atributos :

- id_colegio PK
- nombre VARCHAR(30)
- direccion VARCHAR(30)

estudiantes [1..*] colegio

#### Min 3 registros por tabla

```SQL
ALTER TABLE estudiantes ADD COLUMN id_colegio int4 NOT NULL ;
ALTER TABLE estudiantes ADD CONSTRAINT fk_estudiantes_colegios FOREIGN KEY (id_colegio) REFERENCES colegio(id_colegio);
```

### Consultas :

- Listar estudiante por nombre L
- Listar estudiante por nombre y apellido
- Listar estudiante y el colegio asociado L
- Listar todos los colegios L
- Listar cantidad de colegios existentes
