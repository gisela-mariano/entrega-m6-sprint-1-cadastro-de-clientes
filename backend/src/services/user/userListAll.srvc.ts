import { userRepository } from '../../repositories';
import { IUserResponse } from '../../interfaces/user.interface';

const userListAllService = async (): Promise<IUserResponse[]> => {
  const users = await userRepository
    .createQueryBuilder('user')
    .select(['user.id', 'user.name', 'user.email'])
    .getMany();

  return users;
};

export default userListAllService;
