// Dependencies
import * as express from 'express';
import { createConnection } from 'typeorm';

const app = express();
const PORT = 3001;

// bodyparser alternative
app.use(express.json());

const handler = express();

(async () => {
  const connection = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'localuser',
    password: 'localpass',
    database: 'local',
    entities: ['entities/*'],
  });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
})();

handler.get('/', (req, res) => {
  res.send('hallo welt');
});

app.use('/api', handler);
