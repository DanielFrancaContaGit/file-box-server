import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

class FileController {
  async storeFile(request: Request, response: Response) {
    return response.status(200).json({ message: 'file successfully stored' });
  }

  async listFiles(request: Request, response: Response) {
    const caminho = path.resolve(__dirname, '..', 'tmp', 'uploads');

    const filesList: string[] = [];

    fs.readdir(caminho, (err, files) => {
      // handling error
      if (err) {
        return console.log(`Unable to scan directory: ${err}`);
      }
      // listing all files using forEach
      files.forEach((file) => {
        // Do whatever you want to do with the file
        filesList.push(file);
      });
      return response.status(200).json(filesList);
    });
  }

  async getFile(request: Request, response: Response) {
    const { fileName } = request.params;

    const caminho = path.resolve(__dirname, '..', 'tmp', 'uploads', fileName);

    return response.download(caminho);
  }
}

export default new FileController();
