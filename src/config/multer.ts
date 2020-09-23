import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const multerConfig = {
  dest: path.resolve(__dirname, '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        if (err) cb(err, fileName);

        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
};

export default multerConfig;
