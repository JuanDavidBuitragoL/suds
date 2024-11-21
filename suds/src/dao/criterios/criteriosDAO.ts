import { Response } from "express";
import pool from "../../config/conection/conexion";

class criteriosDAO {
    protected static async listarTodosCri(sql_listar: string, parametros: any, res: Response): Promise<any> {
        await pool
            .result(sql_listar, parametros)
            .then((respuesta) => {
                return res.status(200).json({ Mensaje: "Criterios:", Respuesta: respuesta.rows });
            })
            .catch((errorcito) => {
                console.error("Error listando criterios:", errorcito);
                res.status(400).json({ Mensaje: "Error listando criterios, contacte al admin." });
            });
    }

    protected static async crearCritero(
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
              return {id_criterio: 0};
            }
          }).then((respuesta)=>{
          if(respuesta.id_criterio != 0){
              res.status(200).json({
                Mensaje: "criterio creado",
                nuevoCodigo: respuesta.id_criterio
              })
            }else{
              res.status(400).json({
                Mensaje: "criterio no creado, puede estar repetido",
            })
          }
          })
          .catch((mierror)=>{
            console.log("Error", mierror);
            res.status(400).json({
              Respuesta: "criterio no creado",
            })
            
          })
    }

    protected static async editarCriterio(sqlActualizar: string, params: any, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                return await consulta.result(sqlActualizar, params);
            })
            .then(() => {
                res.status(200).json({ Mensaje: "Criterio actualizado." });
            })
            .catch((errorcito) => {
                console.error("Error actualizando criterio:", errorcito);
                res.status(400).json({ Mensaje: "Error actualizando criterio." });
            });
    }

    protected static async borrarCriterio(sqlBorrar: string, params: any, res: Response): Promise<any> {
        await pool
            .result(sqlBorrar, params)
            .then((respuesta) => {
                res.status(200).json({ Mensaje: "Criterio eliminado.", resultado: respuesta.rowCount });
            })
            .catch((errorcito) => {
                console.error("Error eliminando criterio:", errorcito);
                res.status(400).json({ Mensaje: "Error eliminando criterio." });
            });
    }
}

export default criteriosDAO;
