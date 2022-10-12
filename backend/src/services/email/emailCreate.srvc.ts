import { Client } from '../../entities/client.entity';
import { Email } from '../../entities/email.entity';
import { IEmailCreateRequest, IEmailCreateReturn } from '../../interfaces/email.interface';
import { clientRepository, emailRepository } from '../../repositories';

const emailCreateService = async ({ email, idClient }: IEmailCreateRequest): Promise<IEmailCreateReturn> => {
  const client = await clientRepository.findOne({
    where: {
      id: idClient,
    },
  });

  const newEmail = new Email();
  newEmail.email = email;
  newEmail.client = { ...new Client(), ...client };

  emailRepository.create(newEmail);
  await emailRepository.save(newEmail);

  const createdEmail = await emailRepository.findOne({
    where: {
      id: newEmail.id
    }
  })

  return createdEmail!;
};

export default emailCreateService;
