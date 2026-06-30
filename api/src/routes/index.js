import { Router } from 'express';
const router = Router();

import librosRoutes from './librosRoutes.js'
import taleresRoutes from './talleresRoutes.js'

router.use('/libros', librosRoutes)
router.use('/talleres', taleresRoutes)

export default router;