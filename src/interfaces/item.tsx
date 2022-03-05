export interface IItem {
  _id: string | number;
  name: string;
  count: number;
  slogan: string;
  airline: IAirline[]
}

interface  IAirline {
  country: string;
  established: string;
  head_quaters: string;
  logo: string;
  website: string;
}


