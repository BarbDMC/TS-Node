import express, {Request, Response} from 'express';
import {routerApi} from './routes/routerApi';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello world</h1>')
});

routerApi(app);

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on PORT ${PORT}`)
