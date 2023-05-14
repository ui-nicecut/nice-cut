import { Schedule } from "./Schedule";

export interface HairStylist {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
  schedule?: Schedule;
}