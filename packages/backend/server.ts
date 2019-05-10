// Dependencies
import * as express from 'express';

const app = express();
const PORT = 3001;

// bodyparser alternative
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hallo Welt');
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
