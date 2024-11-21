import { SQL_ROLES } from './../../repository/roles/rolesRepository';
import { Request, Response } from "express";
import rolesDAO from "../../dao/roles/rolesDAO";



class rolesController extends rolesDAO {
    public listarRoles(req:Request, res: Response){
        const codigo = req.params.id;
        const parametro = [codigo];
        const sql_listar_id = SQL_ROLES.LISTAR_TODOS;
          
        rolesController.listarRoles(sql_listar_id,parametro,res);
      }


    public crearRol(req: Request, res: Response): void {
        const { nombre_rol } = req.body;
        const id_rol = parseInt(req.params.id);
    
        // Crea el array de datos a guardar en la base de datos
        const datos = [nombre_rol, id_rol];
    
        rolesController.crearRol(
            SQL_ROLES.VERIFICAR,
            SQL_ROLES.CREAR,
            datos,
            res
        );
    }

    public updateRol(req: Request, res: Response): void {
        const id_rol = parseInt(req.params.id_rol);
        const { nombre_rol} = req.body;
        const datos = [nombre_rol,id_rol]; 
    
        rolesController.editarRol(
            SQL_ROLES.EDITAR,
            datos,
            res
        );
    }

    public borrarRol(req: Request, res: Response): void{
        const codigo = req.params.id;
        const parametro = [codigo];
        rolesController.borrarPorId(
            SQL_ROLES.ELIMINAR,
            parametro,
            res
        )
    }
}


const ctrlRoles = new rolesController();
export default ctrlRoles;