create extension if not exists "uuid-ossp";

create table if not exists roles (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  role_id uuid references roles(id),
  full_name text not null,
  email text not null unique,
  password_hash text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists doctors (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  degree text not null,
  specialization text not null,
  bio text,
  photo_url text,
  created_at timestamptz not null default now()
);

create table if not exists doctor_availability (
  id uuid primary key default uuid_generate_v4(),
  doctor_id uuid not null references doctors(id) on delete cascade,
  day_of_week smallint not null,
  start_time time not null,
  end_time time not null,
  slot_interval_minutes integer not null default 30,
  created_at timestamptz not null default now()
);

create table if not exists patients (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  mobile_number text not null unique,
  email text,
  age integer,
  gender text,
  address text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists treatments (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  description text,
  category text,
  base_price numeric(12,2),
  created_at timestamptz not null default now()
);

create table if not exists appointments (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid not null references patients(id) on delete cascade,
  doctor_id uuid references doctors(id),
  treatment_id uuid references treatments(id),
  preferred_date date,
  preferred_time time,
  status text not null default 'new',
  remarks text,
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists appointment_notes (
  id uuid primary key default uuid_generate_v4(),
  appointment_id uuid not null references appointments(id) on delete cascade,
  doctor_id uuid references doctors(id),
  note text not null,
  created_at timestamptz not null default now()
);

create table if not exists leads (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text,
  mobile_number text,
  source text not null,
  status text not null default 'new',
  follow_up_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists blog_posts (
  id uuid primary key default uuid_generate_v4(),
  slug text not null unique,
  title text not null,
  meta_title text not null,
  meta_description text not null,
  body text not null,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists reviews (
  id uuid primary key default uuid_generate_v4(),
  reviewer_name text not null,
  source text not null,
  rating integer not null check (rating between 1 and 5),
  comment text not null,
  created_at timestamptz not null default now()
);

create table if not exists reminders (
  id uuid primary key default uuid_generate_v4(),
  appointment_id uuid not null references appointments(id) on delete cascade,
  channel text not null,
  scheduled_for timestamptz not null,
  sent_at timestamptz,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists audit_logs (
  id uuid primary key default uuid_generate_v4(),
  actor_user_id uuid references users(id),
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb,
  created_at timestamptz not null default now()
);
