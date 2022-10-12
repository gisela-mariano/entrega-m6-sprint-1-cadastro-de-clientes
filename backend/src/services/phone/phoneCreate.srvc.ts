import { Client } from '../../entities/client.entity';
import { Phone } from '../../entities/phone.entity';
import { IPhoneCreateRequest, IPhoneCreateReturn } from '../../interfaces/phone.interface';
import { clientRepository, phoneRepository } from '../../repositories';

const phoneCreateService = async ({ phone, idClient }: IPhoneCreateRequest): Promise<IPhoneCreateReturn> => {
  const client = await clientRepository.findOne({
    where: {
      id: idClient,
    },
  });

  const newPhone = new Phone();
  newPhone.phone_number = phone;
  newPhone.client = { ...new Client(), ...client };

  phoneRepository.create(newPhone);
  await phoneRepository.save(newPhone);

  const createdPhone= await phoneRepository.findOne({
    where: {
      id: newPhone.id
    }
  })

  return createdPhone!;
};

export default phoneCreateService;
