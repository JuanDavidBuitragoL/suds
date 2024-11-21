import { Response } from "express";
import pool from "../../config/conection/conexion";

class componentesDAO {
    protected static async listarTodosCom(sql_listar: string, parametros: any, res: Response): Promise<any> {
        await pool
            .result(sql_listar, parametros)
            .then((respuesta) => {
                return res.status(200).json({ Mensaje: "Componentes:", Respuesta: respuesta.rows });
            })
            .catch((errorcito) => {
                console.error("Error listando componentes:", errorcito);
                res.status(400).json({ Mensaje: "Error listando componentes, contacte al admin." });
            });
    }

    protected static async crearComponente(
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
              return {id_componente: 0};
            }
          }).then((respuesta)=>{
          if(respuesta.id_componente != 0){
              res.status(200).json({
                Mensaje: "componente creado",
                nuevoCodigo: respuesta.id_componente
              })
            }else{
              res.status(400).json({
                Mensaje: "componente no creado, puede estar repetido",
            })
          }
          })
          .catch((mierror)=>{
            console.log("Error", mierror);
            res.status(400).json({
              Respuesta: "componente no creado",
            })
            
          })
      }

    protected static async editarComponente(sqlActualizar: string, params: any, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                return await consulta.result(sqlActualizar, params);
            })
            .then(() => {
                res.status(200).json({ Mensaje: "Componente actualizado." });
            })
            .catch((errorcito) => {
                console.error("Error actualizando componente:", errorcito);
                res.status(400).json({ Mensaje: "Error actualizando componente." });
            });
    }

    protected static async borrarComponente(sqlBorrar: string, params: any, res: Response): Promise<any> {
        await pool
            .result(sqlBorrar, params)
            .then((respuesta) => {
                res.status(200).json({ Mensaje: "Componente eliminado.", resultado: respuesta.rowCount });
            })
            .catch((errorcito) => {
                console.error("Error eliminando componente:", errorcito);
                res.status(400).json({ Mensaje: "Error eliminando componente." });
            });
    }
}
export default componentesDAO;
