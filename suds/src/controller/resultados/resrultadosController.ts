import { Request, Response } from "express";
import { SQL_RESULTADOS } from "../../repository/resultados/resultadosRepository";
import resultadosDAO from "../../dao/resultados/resultadosDAO";

class resultadosController extends resultadosDAO {
    public listarTodosRes(req: Request, res: Response): void {
        resultadosController.listarTodosRes(SQL_RESULTADOS.LISTAR_TODOS, [], res);
    }

    public crearResultado(req: Request, res: Response): void {
        const { nombre_resultado, descripcion, valor_cualitativo, valor_cuantitativo, fecha, id_escala, id_proyecto, id_ingeniero } = req.body;
        const datos = [nombre_resultado, descripcion, valor_cualitativo, valor_cuantitativo, fecha, id_escala, id_proyecto, id_ingeniero];
        resultadosController.crearResultado(SQL_RESULTADOS.VERIFICAR, SQL_RESULTADOS.CREAR, datos, res);
    }

    public editarResultado(req: Request, res: Response): void {
        const { nombre_resultado, descripcion, valor_cualitativo, valor_cuantitativo, fecha, id_escala, id_proyecto, id_ingeniero } = req.body;
        const id_resultado = req.params.id;
        const datos = [nombre_resultado, descripcion, valor_cualitativo, valor_cuantitativo, fecha, id_escala, id_proyecto, id_ingeniero, id_resultado];
        resultadosController.editarResultado(SQL_RESULTADOS.EDITAR, datos, res);
    }

    public borrarResultado(req: Request, res: Response): void {
        const id_resultado = req.params.id;
        const parametro = [id_resultado];
        resultadosController.borrarResultado(SQL_RESULTADOS.ELIMINAR, parametro, res);
    }
}

const ctrlResultados = new resultadosController();
export default ctrlResultados;
