import { phoneRepository } from '../../repositories';

const phoneDeleteService = async (idPhone: string): Promise<boolean> => {
  await phoneRepository.delete({ id: idPhone });

  return true;
};

export default phoneDeleteService;
