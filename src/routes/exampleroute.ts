import { Router, Request, Response } from 'express';

const router = Router();

router.route('/example').get((reqquest: Request, response: Response) => {
  response.json({ message: 'example route' });
});

export { router as example };
