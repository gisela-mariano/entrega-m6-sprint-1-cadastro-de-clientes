import { IEmailUpdateRequest } from '../../interfaces/email.interface';
import { emailRepository } from '../../repositories';

const emailUpdateService = async ({
  email,
  idEmail,
}: IEmailUpdateRequest): Promise<boolean> => {
  await emailRepository.update(idEmail, { email });

  return true;
};

export default emailUpdateService;
