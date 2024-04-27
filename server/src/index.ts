import express, {Express, Request, Response, Application} from 'express';
import cors from 'cors';

const app: Application = express();
const PORT: number = 5000;

app.use(cors());

app.get('/api', (req: Request, res: Response) => { 
    res.json({"message": "Welcome to the API"});
})

app.listen(PORT, () => {
    console.log("Server started on port %d", PORT);
})

import router from './projects.js'
app.use('/projects', router);