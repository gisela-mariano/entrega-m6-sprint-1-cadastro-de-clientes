import {
  IClientRequest,
} from '../../interfaces/client.interfaces';
import jwt from 'jsonwebtoken';
import { IToken } from '../../interfaces/user.interface';
import {
  clientRepository,
  contactRepository,
  emailRepository,
  phoneRepository,
  userRepository,
} from '../../repositories';
import { Client } from '../../entities/client.entity';
import { User } from '../../entities/user.entity';
import { Email } from '../../entities/email.entity';
import { Phone } from '../../entities/phone.entity';
import { Contact } from '../../entities/contact.entity';

const clientCreateService = async ({
  fullName,
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

  const newContact = new Contact();
  // contactRepository.create(newContact)
  await contactRepository.save(newContact);

  if (contacts!.email) {
    const newEmail = new Email();
    newEmail.email = contacts!.email;
    newEmail.contact = { ...newContact };

    emailRepository.create(newEmail);
    await emailRepository.save(newEmail);
  }

  if (contacts!.phone) {
    const newPhone = new Phone();
    newPhone.phone_number = contacts!.phone;
    newPhone.contact = { ...newContact };

    phoneRepository.create(newPhone);
    await phoneRepository.save(newPhone);
  }

  const newClient = new Client();
  newClient.name = fullName;
  newClient.createdAt = new Date().toISOString();
  newClient.user = { ...new User(), ...user };
  newClient.contact = { ...newContact };

  clientRepository.create(newClient);
  await clientRepository.save(newClient);

  const client = await clientRepository.findOne({
    where: {
      id: newClient.id,
    },
  });

  return client!;
};

export default clientCreateService;
