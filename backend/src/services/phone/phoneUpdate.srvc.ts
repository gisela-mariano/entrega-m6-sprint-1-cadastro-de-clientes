import { IPhoneUpdateRequest } from '../../interfaces/phone.interface';
import { phoneRepository } from '../../repositories';

const phoneUpdateService = async ({
  phone,
  idPhone,
}: IPhoneUpdateRequest): Promise<boolean> => {
  await phoneRepository.update(idPhone, { phone_number: phone });

  return true;
};

export default phoneUpdateService;
