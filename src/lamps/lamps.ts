import { Router } from 'express';
import * as bodyParser from 'body-parser';

import { Lamp } from './lamp';
import {
  create,
  findById,
  getAll,
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

const lampIdentificatorParamName = 'id';
router.get(
  `/:${lampIdentificatorParamName}`,
  (request, response) => {
    const idParamValue = request.params[lampIdentificatorParamName];

    const id = Number(idParamValue);

    if (isNaN(id)) {
      response
        .status(400)
        .send('incorrect id');

      throw {
        id: idParamValue,
        message: 'incorrect id'
      };
    }

    const found = findById(id);

    if (!found) {
      response
        .status(400)
        .send('lamp with specified id was not found');

      throw {
        id,
        message: 'there is no lamp with specified id'
      };
    }

    response.send(found);
  }
);

router.get(
  `/`,
  (_, response) => {
    const lamps = getAll();

    response.send(lamps);
  }
);

export default router;
