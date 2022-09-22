import express from 'express';
import userRouter from './routes/user.routes';

const app = express();
app.use(express.json());

app.use("/users", userRouter)

const port = 3000;

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
