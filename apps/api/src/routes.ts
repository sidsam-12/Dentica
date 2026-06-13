import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { doctors, services } from './seed.js';
import { createInMemoryStore } from './store.js';

const store = createInMemoryStore();

const appointmentSchema = z.object({
  name: z.string().min(2),
  mobileNumber: z.string().min(8),
  email: z.string().email().optional().or(z.literal('')),
  age: z.string().optional(),
  gender: z.string().optional(),
  preferredDoctor: z.string().min(2),
  preferredTreatment: z.string().min(2),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
  remarks: z.string().optional()
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['Super Admin', 'Receptionist', 'Doctor'])
});

const rescheduleSchema = z.object({
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional()
});

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal('')),
  mobileNumber: z.string().optional(),
  source: z.string().min(2)
});

export const apiRouter = Router();

apiRouter.get('/doctors', (_request, response) => {
  response.json({ doctors });
});

apiRouter.get('/services', (_request, response) => {
  response.json({ services });
});

apiRouter.get('/slots', (request, response) => {
  const date = String(request.query.date ?? '');
  const doctorId = String(request.query.doctorId ?? '');
  response.json({
    doctorId,
    date,
    slots: ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '04:00 PM', '05:00 PM', '06:00 PM']
  });
});

apiRouter.post('/appointments', (request, response) => {
  const parsed = appointmentSchema.safeParse(request.body);
  if (!parsed.success) {
    return response.status(400).json({ ok: false, errors: parsed.error.flatten() });
  }

  const appointment = store.createAppointment(parsed.data);
  return response.status(201).json({
    ok: true,
    appointment,
    notifications: ['email', 'whatsapp', 'admin']
  });
});

apiRouter.get('/dashboard/summary', (_request, response) => {
  response.json(store.getDashboardSummary());
});

apiRouter.get('/patients', (_request, response) => {
  response.json({ patients: store.listPatients() });
});

apiRouter.get('/appointments', (_request, response) => {
  response.json({ appointments: store.listAppointments() });
});

apiRouter.patch('/appointments/:id/confirm', (request, response) => {
  const updated = store.updateAppointmentStatus(String(request.params.id), 'confirmed');
  if (!updated) return response.status(404).json({ ok: false, message: 'Appointment not found' });
  return response.json({ ok: true, appointment: updated });
});

apiRouter.patch('/appointments/:id/cancel', (request, response) => {
  const updated = store.updateAppointmentStatus(String(request.params.id), 'cancelled');
  if (!updated) return response.status(404).json({ ok: false, message: 'Appointment not found' });
  return response.json({ ok: true, appointment: updated });
});

apiRouter.patch('/appointments/:id/reschedule', (request, response) => {
  const parsed = rescheduleSchema.safeParse(request.body);
  if (!parsed.success) {
    return response.status(400).json({ ok: false, errors: parsed.error.flatten() });
  }
  const updated = store.rescheduleAppointment(String(request.params.id), parsed.data.preferredDate, parsed.data.preferredTime);
  if (!updated) return response.status(404).json({ ok: false, message: 'Appointment not found' });
  return response.json({ ok: true, appointment: updated });
});

apiRouter.get('/leads', (_request, response) => {
  response.json({ leads: store.listLeads() });
});

apiRouter.post('/leads', (request, response) => {
  const parsed = leadSchema.safeParse(request.body);
  if (!parsed.success) {
    return response.status(400).json({ ok: false, errors: parsed.error.flatten() });
  }
  const lead = store.createLead(parsed.data);
  return response.status(201).json({ ok: true, lead });
});

apiRouter.get('/reports/daily', (_request, response) => {
  response.json({ date: new Date().toISOString().slice(0, 10), appointments: store.listAppointments().length });
});

apiRouter.get('/reports/monthly', (_request, response) => {
  response.json({ month: new Date().toISOString().slice(0, 7), appointments: store.listAppointments().length, revenue: store.getDashboardSummary().estimatedRevenue });
});

apiRouter.get('/reminders/preview', (_request, response) => {
  response.json({
    channels: ['WhatsApp', 'SMS', 'Email'],
    schedules: ['24 hours before appointment', '2 hours before appointment']
  });
});

apiRouter.post('/auth/login', (request, response) => {
  const parsed = loginSchema.safeParse(request.body);
  if (!parsed.success) {
    return response.status(400).json({ ok: false, errors: parsed.error.flatten() });
  }

  const token = jwt.sign(
    { email: parsed.data.email, role: parsed.data.role },
    process.env.JWT_SECRET ?? 'development-secret',
    { expiresIn: '8h' }
  );

  return response.json({
    ok: true,
    token,
    role: parsed.data.role
  });
});
