import { IUserResponse } from '../../interfaces/user.interface';
import { userRepository } from '../../repositories';

const userListOneService = async (id_user: string): Promise<IUserResponse> => {
  const user = await userRepository
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.clients', 'clients')
    .select(['user.id', 'user.name', 'user.email', 'clients'])
    .where('user.id = :id', { id: id_user })
    .getOne();

  return user!;
};

export default userListOneService;
