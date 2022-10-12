export interface IPhoneCreateRequest {
  idClient: string;
  phone: string;
}

export interface IPhoneCreateReturn {
  id: string;
  phone_number: string;
}

export interface IPhoneUpdateRequest {
  idPhone: string;
  phone: string;
}
