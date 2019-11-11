import { Router } from 'express';
import * as bodyParser from 'body-parser';

import { Lamp } from './lamp';
import {
  create,
  findById,
  update,
  deleteLamp
} from './lampsData';

const router = Router();

router.post(
  '/create',
  bodyParser.json(),
  ({ body }, response) => {
    const { name, age } = body;

    if (typeof(name) !== 'string') {
      response
        .status(400)
        .send('name is required and should be a string');

      throw {
        message: 'name was not found or incorrect'
      };
    }

    if (typeof(age) !== 'number') {
      response
        .status(400)
        .send('age is required and should be a number');

      throw {
        message: 'age was not found or incorrect'
      };
    }

    const created = create(name, age);
    response.send(created);
  }
);

export default router;
