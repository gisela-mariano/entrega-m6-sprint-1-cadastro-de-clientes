import { IToken } from "../../interfaces/user.interface";
import { clientRepository, userRepository } from "../../repositories";
import jwt from 'jsonwebtoken';

const clientListAllService = async (token: string) => {

  const splitedToken = token!.split(' ')[1];
  const decodedToken = jwt.decode(splitedToken) as IToken;

  const clients = await clientRepository.createQueryBuilder('client')
  .innerJoin('client.user', 'user', 'client.userId = user.id')
  .leftJoinAndSelect('client.emails', 'email')
  .leftJoinAndSelect('client.phones', 'phone')
  .where("user.id = :id", {id: decodedToken.id_user})
  .getMany()

  return clients
};


export default clientListAllService