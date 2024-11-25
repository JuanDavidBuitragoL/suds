import { SQL_INDICADORES } from './../../repository/indicadores/indicadoresRespoitory';
import { Request, Response } from "express";
import indicadoresDAO from "../../dao/indicadores/indicadoresDAO";



class indicadoresController extends indicadoresDAO {
    public listarIndicadores(req:Request, res: Response){
        const codigo = req.params.id;
        const parametro = [codigo];
        const sql_listar_id = SQL_INDICADORES.LISTAR_TODOS;
          
        indicadoresController.listarIndicadores(sql_listar_id,parametro,res);
      }


    public crearIndicador(req: Request, res: Response): void {
        const { nombre_indicador, descripcion,id_criterio,vector_propio } = req.body;
        // Crea el array de datos a guardar en la base de datos
        const datos = [nombre_indicador, descripcion,id_criterio,vector_propio];
    
        indicadoresController.crearIndicador(
            SQL_INDICADORES.VERIFICAR,
            SQL_INDICADORES.CREAR,
            datos,
            res
        );
    }

    public updateIndicador(req: Request, res: Response): void {
        const id_indicador = parseInt(req.params.id_indicador);
        const { nombre_indicador, descripcion,id_criterio,vector_propio } = req.body;
        const datos = [nombre_indicador, descripcion,id_criterio,vector_propio,id_indicador]; 
    
        indicadoresController.editarIndicador(
            SQL_INDICADORES.EDITAR,
            datos,
            res
        );
    }

    public borrarIndicador(req: Request, res: Response): void{
        const codigo = req.params.id;
        const parametro = [codigo];
        indicadoresController.borrarPorId(
            SQL_INDICADORES.ELIMINAR,
            parametro,
            res
        )
    }
}


const ctrlIndicadores = new indicadoresController();
export default ctrlIndicadores;