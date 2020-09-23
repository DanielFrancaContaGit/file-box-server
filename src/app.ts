import express, { Express } from 'express';
import cors from 'cors';
import routes from './routes';

class Application {
  express: Express;

  constructor() {
    this.express = express();
    this.middlewares();
    this.client();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json({ limit: '5mb' }));
  }

  routes() {
    this.express.use(routes);
  }

  client() {
    this.express.get('/', (request, response) => {
      response.json({
        App: 'file box',
        Status: 'develop',
        Autor: 'DanielContaGit',
      });
    });
  }
}

const app = new Application().express;

export { app };
