# API Documentation

## Base URL

`/api` when proxied behind the backend server.

## Endpoints

### `POST /api/appointments`

Creates an appointment request and triggers confirmation flows.

### `GET /api/doctors`

Returns clinic doctors and availability data.

### `GET /api/slots?doctorId=&date=`

Returns available time slots for a doctor on a selected date.

### `POST /api/auth/login`

Issues a JWT for CRM access.

### `GET /api/dashboard/summary`

Returns counts for appointments, patients, leads, and revenue.

### `PATCH /api/appointments/:id/confirm`

Marks an appointment as confirmed.

### `PATCH /api/appointments/:id/cancel`

Marks an appointment as cancelled.

### `PATCH /api/appointments/:id/reschedule`

Updates the preferred date and time.

### `GET /api/leads`

Lists website and WhatsApp leads.

### `POST /api/leads`

Creates a new lead entry.

### `GET /api/reminders/preview`

Returns the reminder channels and schedules used by the automation layer.
