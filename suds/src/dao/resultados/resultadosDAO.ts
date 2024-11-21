import { Response } from "express";
import pool from "../../config/conection/conexion";

class resultadosDAO {
    protected static async listarTodosRes(sql_listar: string, parametros: any, res: Response): Promise<any> {
        await pool
            .result(sql_listar, parametros)
            .then((respuesta) => {
                res.status(200).json({ Mensaje: "Resultados:", Respuesta: respuesta.rows });
            })
            .catch((error) => {
                console.error("Error listando resultados:", error);
                res.status(400).json({ Mensaje: "Error listando resultados, contacte al administrador." });
            });
    }

    protected static async crearResultado(
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
              return {id_resultado: 0};
            }
          }).then((respuesta)=>{
          if(respuesta.id_resultado != 0){
              res.status(200).json({
                Mensaje: "resultado creado",
                nuevoCodigo: respuesta.id_resultado
              })
            }else{
              res.status(400).json({
                Mensaje: "resultado no creado, puede estar repetido",
            })
          }
          })
          .catch((mierror)=>{
            console.log("Error", mierror);
            res.status(400).json({
              Respuesta: "resultado no creado",
            })
            
          })
      }
    protected static async editarResultado(sqlActualizar: string, params: any, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                return await consulta.result(sqlActualizar, params);
            })
            .then(() => {
                res.status(200).json({ Mensaje: "Resultado actualizado." });
            })
            .catch((error) => {
                console.error("Error actualizando resultado:", error);
                res.status(400).json({ Mensaje: "Error actualizando resultado." });
            });
    }

    protected static async borrarResultado(sqlBorrar: string, params: any, res: Response): Promise<any> {
        await pool
            .result(sqlBorrar, params)
            .then((respuesta) => {
                res.status(200).json({ Mensaje: "Resultado eliminado.", resultado: respuesta.rowCount });
            })
            .catch((error) => {
                console.error("Error eliminando resultado:", error);
                res.status(400).json({ Mensaje: "Error eliminando resultado." });
            });
    }
}

export default resultadosDAO;
