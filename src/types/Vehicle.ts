export interface IVehicle {
  id: number;
  name: string;
  description: string;
  plate: string;
  isFavorite: boolean;
  year: number;
  color: string;
  price: number;
  createdAt: Date;
}

export interface VehicleData {
  uuid?: string;
  name: string;
  brand: string;
  description?: string;
  plate: string;
  isFavorite?: boolean;
  year: number;
  color: string;
  price: string;
  createdOn?: Date;
  updatedOn?: Date;
}

export interface RegForm {
  name: string;
  brand: string;
  color: string;
  year: number;
  plate: string;
  price: string;
  description: string;
}
