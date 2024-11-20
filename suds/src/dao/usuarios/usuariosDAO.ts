import { Response } from "express";

import pool from "../../config/conection/conexion";

class usuariosDAO {
  protected static async listarTodosUsu(
    sql_listar: string,
    parametros: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(sql_listar, parametros)
      .then((respuesta) => {
        console.log(">>>>>" + respuesta.rows);
        return res
          .status(200)
          .json({ Mensaje: "Usuarios: ", Respuesta: respuesta.rows });
      })
      .catch((errorcito) => {
        console.log("Exploto D:...", errorcito);
        res.status(400).json({
          Mensaje: "Error listando usuarios, comunique al admin pro",
        });
      });
  }

  protected static async crearUsuario(
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
          return {id_usuario: 0};
        }
      }).then((respuesta)=>{
      if(respuesta.id_usuario != 0){
          res.status(200).json({
            Mensaje: "Usuario creado",
            nuevoCodigo: respuesta.id_usuario
          })
        }else{
          res.status(400).json({
            Mensaje: "Usuario no creado, puede estar repetido",
        })
      }
      })
      .catch((mierror)=>{
        console.log("Error", mierror);
        res.status(400).json({
          Respuesta: "Usuario no creado",
        })
        
      })
  }

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
          Mensaje: "Usuario borrado",
          resultado: dato.rowCount,
        });
      })
      .catch((mierror) => {
        console.log("Error", mierror);
        res.status(400).json({
          Respuesta: "Error eliminando usuario...",
        });
      });
  }

  protected static async editarUsuario(
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
          respuesta: "Usuario actualizado ",
        });
      })
      .catch((mierror) => {
        console.log("Error", mierror);
        res.status(400).json({
          Respuesta: "Usuario no editado",
        });
      });
  }
}
export default usuariosDAO;
