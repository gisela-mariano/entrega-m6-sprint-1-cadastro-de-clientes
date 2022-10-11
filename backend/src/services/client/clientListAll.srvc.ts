import { IToken } from "../../interfaces/user.interface";
import { clientRepository, userRepository } from "../../repositories";
import jwt from 'jsonwebtoken';

const clientListAllService = async (token: string) => {

  const splitedToken = token!.split(' ')[1];
  const decodedToken = jwt.decode(splitedToken) as IToken;

  const clients = await clientRepository.createQueryBuilder('client')
  .innerJoin('client.user', 'user', 'client.userId = user.id')
  .innerJoin('client.contact', 'contact', 'client.contactId = contact.id')
  .innerJoin('contact.emails', 'emails')
  .innerJoin('contact.phones', 'phones')
  .select(['client.id', 'client.name', 'contact', 'emails', 'phones'])
  .where("user.id = :id", {id: decodedToken.id_user})
  .getMany()

  // const clients = await clientRepository.createQueryBuilder('client')
  // .leftJoinAndSelect('client.contact', 'contact')
  // .select(['client.id', 'client.name', 'client.createdAt', 'contact'])
  // .getMany()

  console.log(clients);

  return clients
};


export default clientListAllService