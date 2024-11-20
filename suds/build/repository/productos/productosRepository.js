"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PRODUCTOS = void 0;
exports.SQL_PRODUCTOS = {
    LISTAR_TODOS: "SELECT * FROM productos",
    CREAR: "INSERT INTO productos (codigo_producto, nombre_producto, descripcion_producto, precio_producto, existencias_producto, id_proveedor) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_producto",
    VERIFICAR: "SELECT COUNT(id_producto) AS cantidad FROM productos e WHERE lower(e.nombre_producto) = lower($1)",
    ELIMINAR: "DELETE FROM productos WHERE id_producto = $1",
    EDITAR: "UPDATE productos SET codigo_producto = $1, nombre_producto = $2, descripcion_producto = $3, precio_producto = $4, existencias_producto = $5, id_proveedor = $6 WHERE id_producto = $7",
    //CONSULTA1: Mostrar codigo nombre precio existencias de todos los productos con su respectivo proveedor
    CONSULTA1: "SELECT productos.codigo_producto,productos.nombre_producto,productos.precio_producto,productos.existencias_producto,proveedores.nombre_proveedor FROM productos INNER JOIN proveedores ON productos.id_proveedor=proveedores.id_proveedor",
    //CONSULTA5: Mostrar el nombre, precio , proveedor y la optica en la que se encuentra ubicado cada producto
    CONSULTA5: "SELECT productos.nombre_producto, productos.precio_producto, proveedores.nombre_proveedor, opticas.nombre_optica FROM productos JOIN proveedores ON productos.id_proveedor = proveedores.id_proveedor JOIN proveedores_opticas ON proveedores.id_proveedor = proveedores_opticas.id_proveedor JOIN opticas ON proveedores_opticas.id_optica = opticas.id_optica"
};
//# sourceMappingURL=productosRepository.js.map