import { Request, Response } from 'express';
import LibroModel, { Libro } from '../models/libro';

class LibrosController {

    public async index(req: Request, res: Response): Promise<void> {
        const libros: Libro[] = await LibroModel.find();
        res.render('libros/index', {
            title: "Libros",
            libros
        });
    }

    public renderFormularioLibro(req: Request, res: Response): void {
        res.render('libros/add', { title: "Agregar un libro" });
    }

    public async guardarLibro(req: Request, res: Response): Promise<void> {
        const { titulo, autor, isbn } = req.body;
        const libro: Libro = new LibroModel({ titulo, autor, isbn });
        await libro.save();
        res.redirect('/libros');
    }
}

export const librosController = new LibrosController();