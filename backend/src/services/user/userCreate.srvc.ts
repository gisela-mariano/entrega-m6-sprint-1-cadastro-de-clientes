import {
  IUserRequest,
  IUserRequestWithoutPassword,
  IUserResponse,
} from '../../interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcryptjs';
import { userRepository } from '../../repositories';
import { User } from '../../entities/user.entity';

const userCreateService = async ({
  name,
  email,
  password,
}: IUserRequest): Promise<IUserResponse> => {
  const hashedPassword = await hash(password, 10);

  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = hashedPassword;

  userRepository.create(newUser);
  await userRepository.save(newUser);

  const dataReturn: IUserRequestWithoutPassword = { ...newUser };
  delete dataReturn.password;

  return dataReturn;
};

export default userCreateService;
