
-- Tabla componentes
CREATE TABLE componentes (
    id_componente SERIAL NOT NULL PRIMARY KEY,
    nombre_componente VARCHAR(200),
    descripcion TEXT,
    photo TEXT,
    valor_amenidad FLOAT,
    valor_cualitativo VARCHAR(50)
);

-- Tabla criterios
CREATE TABLE criterios (
    id_criterio SERIAL NOT NULL PRIMARY KEY,
    nombre_criterio TEXT ,
    descripcion TEXT,
    intensidad INT,
    valor_cuantitativo FLOAT,
    valor_cualitativo VARCHAR(50),
    id_componente INT4,
    CONSTRAINT id_componente_fk FOREIGN KEY (id_componente) REFERENCES componentes(id_componente)
);

-- Tabla indicadores
CREATE TABLE indicadores (
    id_indicador SERIAL NOT NULL PRIMARY KEY,
    nombre_indicador VARCHAR(254),
    descripcion VARCHAR(254),
    id_criterio INT4,
    CONSTRAINT id_criterio_fk FOREIGN KEY (id_criterio) REFERENCES criterios(id_criterio)
);

-- Tabla escalas
CREATE TABLE escalas (
    id_escala SERIAL NOT NULL PRIMARY KEY,
    nombre_escala VARCHAR(254) NOT NULL,
    descripcion VARCHAR(254),
    intensidad FLOAT,
    peso FLOAT,
    id_indicador INT4,
    CONSTRAINT id_indicador_fk FOREIGN KEY (id_indicador) REFERENCES indicadores(id_indicador)
);

-- Tabla proyectos
CREATE TABLE proyectos (
    id_proyecto SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(254) NOT NULL,
    fecha_realizacion DATE,
    amenidad FLOAT,
    localizacion VARCHAR(254),
    geolocalizacion VARCHAR(254),
    photo TEXT
);

-- Tabla usuarios
CREATE TABLE usuarios (
    id_usuario SERIAL NOT NULL PRIMARY KEY,
    correo_usuario VARCHAR(254) NOT NULL,
    password_usuario VARCHAR(254) NOT NULL,
    nombre_usuario VARCHAR(254) NOT NULL,
    nombres_usuario VARCHAR(254) NOT NULL,
    apellidos_usuario VARCHAR(254) NOT NULL
);

-- Tabla ingenieros
CREATE TABLE ingenieros (
    id_ingeniero SERIAL NOT NULL PRIMARY KEY,
    id_usuario INT4,
    id_proyecto INT4,
    fecha DATE,
    CONSTRAINT id_usuario_fk FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    CONSTRAINT id_proyecto_fk FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);

-- Tabla resultados
CREATE TABLE resultados (
    id_resultado SERIAL NOT NULL PRIMARY KEY,
    nombre_resultado TEXT NOT NULL,
    descripcion TEXT,
    valor_cualitativo VARCHAR(100),
    valor_cuantitativo FLOAT,
    fecha DATE,
    id_escala INT4,
    id_proyecto INT4,
    id_ingeniero INT4,
    CONSTRAINT id_escala_fk FOREIGN KEY (id_escala) REFERENCES escalas(id_escala),
    CONSTRAINT id_proyecto_fk FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    CONSTRAINT id_ingeniero_fk FOREIGN KEY (id_ingeniero) REFERENCES ingenieros(id_ingeniero)
);

-- Tabla roles
CREATE TABLE roles (
    id_rol SERIAL NOT NULL PRIMARY KEY,
    nombre_rol VARCHAR(200) NOT NULL
);