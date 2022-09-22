import { Request, Response } from 'express';
import { IUserRequest } from '../interfaces/user.interface';
import userCreateService from '../services/userCreate.service';

const userCreateController = async (req: Request, res: Response) => {
  const { name, email, password }: IUserRequest = req.body;

  try {
    const createdUser = await userCreateService({ name, email, password });

    return res.status(201).json(createdUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userCreateController;
