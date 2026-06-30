import { Router } from 'express';
const router = Router();

import TalleresController from '../controllers/talleresController.js';

router.get('/', TalleresController.obtener);
router.get('/:id', TalleresController.obtenerPorId);

 
export default router;