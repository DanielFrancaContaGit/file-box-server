import { Router } from 'express';

import { example } from './exampleroute';
import { fileRoute } from './fileRoute';

const router = Router();

router.use(example);
router.use(fileRoute);

export default router;
