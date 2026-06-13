export type Doctor = {
  id: string;
  name: string;
  degree: string;
  specialties: string[];
};

export type AppointmentRequest = {
  name: string;
  mobileNumber: string;
  email?: string;
  age?: string;
  gender?: string;
  preferredDoctor: string;
  preferredTreatment: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  remarks?: string;
};

export const roles = ['Super Admin', 'Receptionist', 'Doctor'] as const;
