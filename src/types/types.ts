
interface IAddress {
  street: string;
  city: string;
  zipcode: number;
}

export interface IUserData {
  id: number;
  name: string;
  email: string;
  address: IAddress;
  phone: number;
  website: string;
}

