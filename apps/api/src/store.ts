import { doctors } from './seed.js';

type Appointment = {
  id: string;
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
  status: 'new' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
};

type Lead = {
  id: string;
  name: string;
  email?: string;
  mobileNumber?: string;
  source: string;
  status: 'new' | 'contacted' | 'converted';
  createdAt: string;
};

type Patient = {
  id: string;
  name: string;
  mobileNumber: string;
  appointments: number;
  history: string[];
};

const appointments: Appointment[] = [
  {
    id: 'apt-1001',
    name: 'Amit Das',
    mobileNumber: '9876543210',
    preferredDoctor: doctors[0].name,
    preferredTreatment: 'Root Canal Treatment',
    preferredDate: new Date().toISOString().slice(0, 10),
    preferredTime: '11:00 AM',
    status: 'confirmed',
    createdAt: new Date().toISOString()
  }
];

const patients: Patient[] = [
  {
    id: 'pat-1001',
    name: 'Amit Das',
    mobileNumber: '9876543210',
    appointments: 2,
    history: ['Root canal follow-up', 'Post-treatment review']
  }
];

const leads: Lead[] = [
  {
    id: 'lead-1001',
    name: 'Priya Sethi',
    email: 'priya@example.com',
    mobileNumber: '9123456780',
    source: 'WhatsApp',
    status: 'new',
    createdAt: new Date().toISOString()
  }
];

export function createInMemoryStore() {
  return {
    createAppointment(input: Omit<Appointment, 'id' | 'status' | 'createdAt'>) {
      const appointment: Appointment = {
        id: `apt-${Date.now()}`,
        status: 'new',
        createdAt: new Date().toISOString(),
        ...input
      };
      appointments.unshift(appointment);
      patients.unshift({
        id: `pat-${Date.now()}`,
        name: input.name,
        mobileNumber: input.mobileNumber,
        appointments: 1,
        history: [input.preferredTreatment]
      });
      return appointment;
    },
    updateAppointmentStatus(id: string, status: Appointment['status']) {
      const appointment = appointments.find((entry) => entry.id === id);
      if (!appointment) return null;
      appointment.status = status;
      return appointment;
    },
    rescheduleAppointment(id: string, preferredDate?: string, preferredTime?: string) {
      const appointment = appointments.find((entry) => entry.id === id);
      if (!appointment) return null;
      appointment.preferredDate = preferredDate ?? appointment.preferredDate;
      appointment.preferredTime = preferredTime ?? appointment.preferredTime;
      return appointment;
    },
    listAppointments() {
      return appointments;
    },
    listPatients() {
      return patients;
    },
    listLeads() {
      return leads;
    },
    createLead(input: Omit<Lead, 'id' | 'status' | 'createdAt'>) {
      const lead: Lead = {
        id: `lead-${Date.now()}`,
        status: 'new',
        createdAt: new Date().toISOString(),
        ...input
      };
      leads.unshift(lead);
      return lead;
    },
    getDashboardSummary() {
      return {
        patients: patients.length,
        appointments: appointments.length,
        confirmedAppointments: appointments.filter((appointment) => appointment.status === 'confirmed').length,
        newLeads: leads.filter((lead) => lead.status === 'new').length,
        estimatedRevenue: 186500
      };
    }
  };
}
