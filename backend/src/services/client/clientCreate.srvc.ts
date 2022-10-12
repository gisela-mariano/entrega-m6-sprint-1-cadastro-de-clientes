import { IClientRequest } from '../../interfaces/client.interfaces';
import jwt from 'jsonwebtoken';
import { IToken } from '../../interfaces/user.interface';
import {
  clientRepository,
  emailRepository,
  phoneRepository,
  userRepository,
} from '../../repositories';
import { Client } from '../../entities/client.entity';
import { User } from '../../entities/user.entity';
import { Email } from '../../entities/email.entity';
import { Phone } from '../../entities/phone.entity';
import AppError from '../../errors/AppError';

const clientCreateService = async ({
  name,
  contacts,
  token,
}: IClientRequest): Promise<Client> => {
  const splitedToken = token!.split(' ')[1];
  const decodedToken = jwt.decode(splitedToken) as IToken;

  const user = await userRepository.findOne({
    where: {
      id: decodedToken.id_user,
    },
  });

  const newClient = new Client();
  newClient.name = name;
  newClient.createdAt = new Date().toISOString();
  newClient.user = { ...new User(), ...user };

  await clientRepository.save(newClient);

  if (contacts!.emails) {
    contacts!.emails.forEach(async (email) => {
      const newEmail = new Email();
      newEmail.email = email;
      newEmail.client = newClient;

      emailRepository.create(newEmail);
      await emailRepository.save(newEmail);

      newClient.emails = [newEmail];
    });
  }

  if (contacts!.phones) {
    contacts!.phones.forEach(async (phone) => {
      const newPhone = new Phone();
      newPhone.phone_number = phone;
      newPhone.client = newClient;

      phoneRepository.create(newPhone);
      await phoneRepository.save(newPhone);

      newClient.phones = [newPhone];
    });
  }

  await clientRepository.save(newClient);

  const client = await clientRepository.findOne({
    where: {
      id: newClient.id,
    },
  });

  return client!;
};

export default clientCreateService;
