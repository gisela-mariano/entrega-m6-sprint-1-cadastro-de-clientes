import { emailRepository } from '../../repositories';

const emailDeleteService = async (idEmail: string): Promise<boolean> => {
  await emailRepository.delete({ id: idEmail });

  return true;
};

export default emailDeleteService;
