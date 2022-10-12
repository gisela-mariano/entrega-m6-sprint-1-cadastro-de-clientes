import { clientRepository } from '../../repositories';

const clientDeleteService = async (idClient: string): Promise<boolean> => {
  await clientRepository.delete({
    id: idClient,
  });

  return true;
};

export default clientDeleteService;
