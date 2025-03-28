import 'reflect-metadata';

import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import { AppDataSource } from './src/data-source';

import apiRouter from './src/routes/api.routes';
import driversRouter from './src/routes/driver.routes';
import vehiclesRouter from './src/routes/vehicle.routes';

const configureRoutes = (app: express.Application) => {
  app.use('/api', apiRouter);
  app.use('/drivers', driversRouter);
  app.use('/vehicles', vehiclesRouter);
}

const configureMiddleware = (app: express.Application) => {
  app.use(express.json());
  app.use(cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  }));

  app.use(helmet());

  app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
  });
}

const startServer = async () => {
  try {
    const port: number = parseInt(process.env.PORT || '3001');
    const app = express();

    configureMiddleware(app);
    configureRoutes(app);

    await AppDataSource.initialize();
    
    console.log('Database connection established');

    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();