import { Request, Response } from "express";
import { SQL_PROYECTOS } from "../../repository/proyectos/proyectosRepository";
import proyectosDAO from "../../dao/proyectos/proyectosDAO";

class proyectosController extends proyectosDAO {
    public listarTodosPro(req: Request, res: Response): void {
        proyectosController.listarTodosPro(SQL_PROYECTOS.LISTAR_TODOS, [], res);
    }

    public crearProyecto(req: Request, res: Response): void {
        const { nombre, fecha_realizacion, amenidad, localizacion, geolocalizacion, photo } = req.body;
        const datos = [nombre, fecha_realizacion, amenidad, localizacion, geolocalizacion, photo];
        proyectosController.crearProyecto(SQL_PROYECTOS.VERIFICAR, SQL_PROYECTOS.CREAR, datos, res);
    }

    public editarProyecto(req: Request, res: Response): void {
        const { nombre, fecha_realizacion, amenidad, localizacion, geolocalizacion, photo } = req.body;
        const id_proyecto = req.params.id;
        const datos = [nombre, fecha_realizacion, amenidad, localizacion, geolocalizacion, photo, id_proyecto];
        proyectosController.editarProyecto(SQL_PROYECTOS.EDITAR, datos, res);
    }

    public borrarProyecto(req: Request, res: Response): void {
        const id_proyecto = req.params.id;
        const parametro = [id_proyecto];
        proyectosController.borrarProyecto(SQL_PROYECTOS.ELIMINAR, parametro, res);
    }

    public listarId(req:Request, res: Response){
        const codigo = req.params.id;
        const parametro = [codigo];
        const sql_listar_id = SQL_PROYECTOS.COMPONENTES;
          
        proyectosController.listarProyectoPorId(sql_listar_id,parametro,res);
      }
}

const ctrlProyectos = new proyectosController();
export default ctrlProyectos;
