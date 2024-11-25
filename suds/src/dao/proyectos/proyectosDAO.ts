import { Response } from "express";
import pool from "../../config/conection/conexion";

class proyectosDAO {
    protected static async listarTodosPro(sql_listar: string, parametros: any, res: Response): Promise<any> {
        await pool
            .result(sql_listar, parametros)
            .then((respuesta) => {
                res.status(200).json({ Mensaje: "Proyectos:", Respuesta: respuesta.rows });
            })
            .catch((error) => {
                console.error("Error listando proyectos:", error);
                res.status(400).json({ Mensaje: "Error listando proyectos, contacte al admin." });
            });
    }

    protected static async crearProyecto(
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
              return {id_proyecto: 0};
            }
          }).then((respuesta)=>{
          if(respuesta.id_proyecto != 0){
              res.status(200).json({
                Mensaje: "proyecto creado",
                nuevoCodigo: respuesta.id_proyecto
              })
            }else{
              res.status(400).json({
                Mensaje: "proyecto no creado, puede estar repetido",
            })
          }
          })
          .catch((mierror)=>{
            console.log("Error", mierror);
            res.status(400).json({
              Respuesta: "proyecto no creado",
            })
            
          })
      }

    protected static async editarProyecto(sqlActualizar: string, params: any, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                return await consulta.result(sqlActualizar, params);
            })
            .then(() => {
                res.status(200).json({ Mensaje: "Proyecto actualizado." });
            })
            .catch((error) => {
                console.error("Error actualizando proyecto:", error);
                res.status(400).json({ Mensaje: "Error actualizando proyecto." });
            });
    }

    protected static async listarProyectoPorId(sql_listar: string, parametros: any, res: Response): Promise<any> {
      await pool
          .result(sql_listar, parametros)
          .then((respuesta) => {
              console.log(">>>>>" + respuesta.rows);
              return res.status(200).json({ Mensaje: "Proyecto: ", Respuesta: respuesta.rows });
          })
          .catch((error) => {
              console.log("Exploto D:...", error);
              res.status(400).json({ Mensaje: "Error listando Proyecto, comunique al administrador" });
          });
     }

    protected static async borrarProyecto(sqlBorrar: string, params: any, res: Response): Promise<any> {
        await pool
            .result(sqlBorrar, params)
            .then((respuesta) => {
                res.status(200).json({ Mensaje: "Proyecto eliminado.", resultado: respuesta.rowCount });
            })
            .catch((error) => {
                console.error("Error eliminando proyecto:", error);
                res.status(400).json({ Mensaje: "Error eliminando proyecto." });
            });
    }
}

export default proyectosDAO;
