export interface School {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email?: string;
  principal_name?: string;
  logo?: string;
}

export interface RegisterSchoolRequest {
  name: string;
  address: string;
  city: string;
  email?: string;
  principal_name?: string;
  logo?: string;
}
