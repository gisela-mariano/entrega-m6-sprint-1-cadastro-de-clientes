import { Request, Response } from 'express';
import AppError from '../../errors/AppError';
import { IUserLoginRequest } from '../../interfaces/user.interface';
import userLoginService from '../../services/user/userLogin.srvc';

const userLoginController = async (req: Request, res: Response) => {
  const { email, password }: IUserLoginRequest = req.body;

  try {
    const token = await userLoginService({ email, password });

    return res.status(200).json({ token });
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userLoginController;
