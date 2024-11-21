import { Response } from "express";
import pool from "../../config/conection/conexion";

class ingenierosDAO{
    protected static async listarIngenieros(sql_listar: string, parametros: any, res: Response): Promise<any> {
        await pool
            .result(sql_listar, parametros)
            .then((respuesta) => {
                console.log(">>>>>" + respuesta.rows);
                return res.status(200).json({ Mensaje: "Ingenieros: ", Respuesta: respuesta.rows });
            })
            .catch((error) => {
                console.log("Exploto D:...", error);
                res.status(400).json({ Mensaje: "Error listando Ingenieros, comunique al administrador" });
            });
       }

    protected static async crearIngeniero(
        sqlCrear: string,
        params: any,
        res: Response
      ): Promise<any> {
        await pool .task(async (consulta) => { 
          return await consulta.one(sqlCrear, params); 
        }).then((respuesta) => { 
          if (respuesta.id_proyecto != 0) { 
            res.status(200).json({ 
              Mensaje: "Ingeniero cread@", 
              nuevoCodigo: respuesta.id_proyecto 
            }); } else { 
              res.status(400).json({
                 Mensaje: "Ingeniero no cread@, puede estar repetid@", 
                }); 
              } 
            }) .catch((mierror) => { 
              console.log("Error", mierror); 
              res.status(400).json({ 
                Respuesta: "Ingeniero no cread@", 
              }); 
            });
      }

      protected static async editarIngeniero(
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
              respuesta: "Ingeniero actualizad@ ",
            });
          })
          .catch((mierror) => {
            console.log("Error", mierror);
            res.status(400).json({
              Respuesta: "Ingeniero no actualizad@",
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
          Mensaje: "Ingeniero borrad@",
          resultado: dato.rowCount,
        });
      })
      .catch((mierror) => {
        console.log("Error", mierror);
        res.status(400).json({
          Respuesta: "Error eliminando Ingeniero...",
        });
      });
  }
}

export default ingenierosDAO;