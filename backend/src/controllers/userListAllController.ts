import { Request, Response } from 'express';
import userListAllService from '../services/userListAll.service';

const userListAllController = async (req: Request, res: Response) => {
  try {
    const users = await userListAllService();

    return res.status(200).json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListAllController;
