import AppError from '../../errors/AppError';
import { IUserLoginRequest, IUserToken } from '../../interfaces/user.interface';
import { userRepository } from '../../repositories/user.repository';
import { compareSync } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userLoginService = async ({
  email,
  password,
}: IUserLoginRequest): Promise<String> => {
  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) throw new AppError('Invalid email or password', 401);

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) throw new AppError('Invalid email or password', 401);

  const token = jwt.sign(
    { name: user.name, email: user.email, id_user: user.id },
    String(process.env.JWT_SECRET),
    { expiresIn: '24h' }
  );

  return token;
};

export default userLoginService;
