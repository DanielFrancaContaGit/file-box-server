import { Router, Request, Response } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import filesController from '../controller/filesController';

const router = Router();

router
  .route('/files')
  .post(multer(multerConfig).any(), filesController.storeFile)
  .get(filesController.listFiles);

router.route('/file-download/:fileName').get(filesController.getFile);

export { router as fileRoute };
