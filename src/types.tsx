
interface IAddress {
  street: string;
  city: string;
  zipcode: number;
}

interface IUserData {
  id: number;
  name: string;
  email: string;
  address: IAddress;
  contact: number;
  website: string;
}

export default IUserData;
