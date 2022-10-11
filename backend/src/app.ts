import express from 'express';
import clientRouter from './routes/client.routes';
import userRouter from './routes/user.routes';

const app = express();
app.use(express.json());

app.use("/users", userRouter)
app.use("/clients", clientRouter)

const port = 3000;

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
