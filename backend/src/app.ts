import express from 'express';
import cors from 'cors';
import clientRouter from './routes/client.routes';
import emailRouter from './routes/email.routes';
import phoneRouter from './routes/phone.routes';
import userRouter from './routes/user.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/clients', clientRouter);
app.use('', emailRouter);
app.use('', phoneRouter);

const port = 3333;

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
