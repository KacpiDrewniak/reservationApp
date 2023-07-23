export type Reservation = {
  isDate?: boolean;
  counter: number;
  status:
    | "Oczekiwanie na potwierdzenie płatności."
    | "Rezerwacja opłacona."
    | "Brak potiwerdzenia płatności."
    | "Rezerwacja usunięta!";
  paymentUrl: string;
  reservationId: number;
  objectId: number;
  objectSlug: string;
  objectName: string;
  clientId: number;
  name: string;
  surname: string;
  phone: string;
  createdByName: string;
  createdBySurname: string;
  createdByEmail: string;
  payed: boolean;
  payedDesc: string;
  price: number;
  date: string;
  dayOfWeek: string;
  dateStart: string;
  dateStop: string;
  hourStart: string;
  hourStop: string;
  totalHours: number;
  roomId: number;
  roomName: string;
  createdAt: string;
  deleted: boolean;
  deletedAt: string;
};
