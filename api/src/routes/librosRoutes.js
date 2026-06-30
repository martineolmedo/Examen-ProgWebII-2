import { Router } from 'express';
const router = Router();

import LibrosController from '../controllers/librosController.js';

router.get('/', LibrosController.obtener);
router.get('/:id', LibrosController.obtenerPorId);

 
export default router;