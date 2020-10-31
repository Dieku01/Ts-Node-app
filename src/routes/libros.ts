import { Router } from 'express'
import { librosController } from '../controllers/librosController'

const router: Router = Router();

router.get('/', librosController.index);

router.get('/add', librosController.renderFormularioLibro);

router.post('/add', librosController.guardarLibro)

export default router;