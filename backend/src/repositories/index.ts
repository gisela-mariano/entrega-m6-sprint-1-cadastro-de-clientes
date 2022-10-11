import { AppDataSource } from '../database';
import { User } from '../entities/user.entity';
import { Client } from '../entities/client.entity';
import { Contact } from '../entities/contact.entity';
import { Email } from '../entities/email.entity';
import { Phone } from '../entities/phone.entity';

export const userRepository = AppDataSource.getRepository(User);
export const clientRepository = AppDataSource.getRepository(Client);
export const contactRepository = AppDataSource.getRepository(Contact);
export const emailRepository = AppDataSource.getRepository(Email);
export const phoneRepository = AppDataSource.getRepository(Phone);
