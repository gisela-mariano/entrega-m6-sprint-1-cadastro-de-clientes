import AppError from '../../errors/AppError';
import { IClientUpdateRequest } from '../../interfaces/client.interfaces';
import { clientRepository } from '../../repositories';

const clientUpdateService = async ({
  idClient,
  name,
}: IClientUpdateRequest): Promise<boolean> => {

  const clientExists = await clientRepository.findOne({
    where: {
      name
    }
  })

  if(clientExists) throw new AppError('Client already registred with this name.', 400)

  await clientRepository.update(idClient, { name });

  return true;
};

export default clientUpdateService;
