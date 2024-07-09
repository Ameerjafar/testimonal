import express from 'express';
import cors from 'cors';
import router from './routes/index'
const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', router)
app.listen(3000);