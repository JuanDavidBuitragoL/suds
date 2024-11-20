"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROVEEDORES = void 0;
exports.SQL_PROVEEDORES = {
    LISTAR_TODOS: "SELECT * FROM proveedores",
    CREAR: "INSERT INTO proveedores ( nombre_proveedor, telefono_proveedor, correo_proveedor ) VALUES ($1, $2, $3) RETURNING id_proveedor",
    VERIFICAR: "SELECT COUNT(id_proveedor) AS cantidad FROM proveedores e WHERE lower(e.nombre_proveedor) = lower($1)",
    ELIMINAR: "DELETE FROM proveedores WHERE id_proveedor = $1",
    EDITAR: "UPDATE proveedores SET nombre_proveedor = $1, telefono_proveedor = $2, correo_proveedor = $3 WHERE id_proveedor = $4",
    //CONSULTA3: Esta consulta selecciona el nombre del proveedor y el nombre y precio de todos sus productos.
    CONSULTA3: "SELECT proveedores.nombre_proveedor, productos.nombre_producto, productos.precio_producto FROM proveedores JOIN productos ON proveedores.id_proveedor = productos.id_proveedor",
    //CONSULTA8: Mostrar la cantidad de productos por proveedor
    CONSULTA8: "SELECT proveedores.nombre_proveedor, COUNT(productos.id_producto) as cantidad_productos FROM proveedores LEFT JOIN productos ON proveedores.id_proveedor = productos.id_proveedor GROUP BY proveedores.nombre_proveedor, proveedores.id_proveedor; "
};
//# sourceMappingURL=proveedorRepository.js.map