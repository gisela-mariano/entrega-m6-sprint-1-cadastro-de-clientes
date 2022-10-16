import { clientRepository } from '../../repositories';

const clientListOneService = async (idClient: string) => {
  const clients = await clientRepository
    .createQueryBuilder('client')
    .leftJoinAndSelect('client.emails', 'email')
    .leftJoinAndSelect('client.phones', 'phone')
    .where('client.id = :id', { id: idClient })
    .getOne();

  return clients;
};

export default clientListOneService;
