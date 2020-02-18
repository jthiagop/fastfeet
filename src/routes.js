import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Thiago? de novo aqui?' });
});

export default routes;
