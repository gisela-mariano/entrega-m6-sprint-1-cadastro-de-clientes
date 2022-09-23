import { Request, Response } from 'express';
import userListOneService from '../../services/user/userListOne.srvc';

const userListOneController = async (req: Request, res: Response) => {
  const { id_user } = req.params;

  try {
    const user = await userListOneService(id_user);

    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListOneController;
