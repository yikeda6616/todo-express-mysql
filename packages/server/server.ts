// Dependencies
import * as express from 'express';
import { createConnection } from 'typeorm';

const app = express();
const PORT = 3001;

// bodyparser alternative
app.use(express.json());

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

// Init API handler
const handler = express();

// Show user
handler.get('/user', (req, res) => {});
// Create user
handler.post('/user', (req, res) => {});
// Edit User
handler.put('/user/:uid', (req, res) => {});
// Delete user
handler.delete('/user/:uid', (req, res) => {});

// Show todo
handler.get('/todo', (req, res) => {});
// Create todo
handler.post('/todo', (req, res) => {});
// Edit todo
handler.put('/todo/:tid', (req, res) => {});
// Delete todo
handler.delete('/todo/:tid', (req, res) => {});

// Mount middleware
app.use('/api', handler);
