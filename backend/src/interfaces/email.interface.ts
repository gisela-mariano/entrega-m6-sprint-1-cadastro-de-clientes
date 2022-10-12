export interface IEmailCreateRequest {
  idClient: string;
  email: string;
}

export interface IEmailCreateReturn {
  id: string;
  email: string;
}

export interface IEmailUpdateRequest {
  idEmail: string;
  email: string;
}