import { SQL_INGENIEROS } from './../../repository/ingenieros/ingenierosRepository';
import { Request, Response } from "express";
import ingenierosDAO from "../../dao/ingenieros/ingenierosDAO";



class ingenierosController extends ingenierosDAO {
    public listarIngenieros(req:Request, res: Response){
        const codigo = req.params.id;
        const parametro = [codigo];
        const sql_listar_id = SQL_INGENIEROS.LISTAR_TODOS;
          
        ingenierosController.listarIngenieros(sql_listar_id,parametro,res);
      }


    public crearIngeniero(req: Request, res: Response): void {
        const { id_usuario, id_proyecto,fecha } = req.body;
    
        // Crea el array de datos a guardar en la base de datos
        const datos = [ id_usuario, id_proyecto,fecha ];
    
        ingenierosController.crearIngeniero(
            SQL_INGENIEROS.CREAR,
            datos,
            res
        );
    }

    public updateIngeniero(req: Request, res: Response): void {
        const id_ingeniero = parseInt(req.params.id_ingeniero);
        const {  id_usuario, id_proyecto,fecha } = req.body;
        const datos = [ id_usuario, id_proyecto,fecha ,id_ingeniero]; 
    
        ingenierosController.editarIngeniero(
            SQL_INGENIEROS.EDITAR,
            datos,
            res
        );
    }

    public borrarIngeniero(req: Request, res: Response): void{
        const codigo = req.params.id;
        const parametro = [codigo];
        ingenierosController.borrarPorId(
            SQL_INGENIEROS.ELIMINAR,
            parametro,
            res
        )
    }
}


const ctrlIngenieros = new ingenierosController();
export default ctrlIngenieros;