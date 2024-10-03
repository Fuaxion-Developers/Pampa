export interface LoginProps {
  email: string;
  password: string;
}

export interface LoginErrorProps {
  email?: string;
  password?: string;
}

export interface RegisterProps {
  first_name: string;
  last_name: string;
  cuit_cuil: string;
  email: string;
  company: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  password: string;
  confirmPass: string;
}

export interface RegisterErrorProps {
  first_name?: string;
  last_name?: string;
  cuit_cuil?: string;
  email?: string;
  company?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  password?: string;
  confirmPass?: string;
}

export interface userSession {
  token: string;
  userData: {
    email: string;
    address: string;
    id: string;
    name: string;
    phone: string;
    role: {};
  };
}

export interface NewServiceProps {
  name: string;
  price: string;
  description: string;
  img: string;
}

export interface NewServiceErrorProps {
  name?: string;
  price?: string;
  description?: string;
  img?: string;
}



export interface Service {
  id: string;
  name: string;
  price: string;
  description: string;
  img: string;
  isActive: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}





export interface PersonInterface {
  id: string;
  first_name: string;
  last_name: string;
  birthdate: Date;
  dni: string;
  phone: string;
  email: string;
  address: string;
  location: string;
  nationality: string;
  is_auth0: boolean;
  photo: string;
  deleteDate: null;
  is_active: boolean;
  roles: {
    id: string;
    name: string;
    description: string;
  }[];
}
