export interface Service {
  name: string;
  price: string;
}

export interface ServiceCategory {
  category: string;
  services: Service[];
}
