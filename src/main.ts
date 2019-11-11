import * as express from 'express';

import lampsRouter from './lamps/lamps';

const app: express.Application = express();

app.use('/lamps', lampsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`)
});
