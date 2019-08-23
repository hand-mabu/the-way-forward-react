import express from 'express';
import bodyParser from 'body-parser';

import users from './routes/users';
import loginValid from './routes/loginValid';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/loginValid', loginValid);


app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(6060, () => console.log('Running on localhost:6060'));