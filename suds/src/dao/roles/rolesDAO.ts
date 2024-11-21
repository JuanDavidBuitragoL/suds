import { Response } from "express";
import pool from "../../config/conection/conexion";

class rolesDAO{
    protected static async listarRoles(sql_listar: string, parametros: any, res: Response): Promise<any> {
        await pool
            .result(sql_listar, parametros)
            .then((respuesta) => {
                console.log(">>>>>" + respuesta.rows);
                return res.status(200).json({ Mensaje: "Roles: ", Respuesta: respuesta.rows });
            })
            .catch((error) => {
                console.log("Exploto D:...", error);
                res.status(400).json({ Mensaje: "Error listando Roles, comunique al administrador" });
            });
       }

    protected static async crearRol(
        sqlConfirmar: string,
        sqlCrear: string,
        params: any,
        res: Response
      ): Promise<any> {
        await pool
          .task(async(consulta)=>{
            const dato = await consulta.one(sqlConfirmar, params)
            if(dato.cantidad == 0){
              return await consulta.one(sqlCrear,params);
            }else{
              return {id_rol: 0};
            }
          }).then((respuesta)=>{
          if(respuesta.id_rol != 0){
              res.status(200).json({
                Mensaje: "Rol cread@",
                nuevoCodigo: respuesta.id_rol
              })
            }else{
              res.status(400).json({
                Mensaje: "Rol no cread@, puede estar repetid@",
            })
          }
          })
          .catch((mierror)=>{
            console.log("Error", mierror);
            res.status(400).json({
              Respuesta: "Rol no cread@",
            })
            
          })
      }

      protected static async editarRol(
        sqlActualizar: string,
        params: any,
        res: Response
      ): Promise<any> {
        await pool
          .task(async (consulta) => {
            return await consulta.result(sqlActualizar, params);
          })
          .then((respuesta) => {
            console.log(respuesta);
            res.status(200).json({
              respuesta: "Rol actualizad@ ",
            });
          })
          .catch((mierror) => {
            console.log("Error", mierror);
            res.status(400).json({
              Respuesta: "Rol no actualizad@",
            });
          });
      }

      /*Eliminar */
  protected static async borrarPorId(
    sqlBorrar: string,
    params: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(sqlBorrar, params)
      .then((dato) => {
        console.log(dato);
        return res.status(200).json({
          Mensaje: "Rol borrad@",
          resultado: dato.rowCount,
        });
      })
      .catch((mierror) => {
        console.log("Error", mierror);
        res.status(400).json({
          Respuesta: "Error eliminando Rol...",
        });
      });
  }
}

export default rolesDAO;