# Dentica

Dentica is a premium, mobile-first dental clinic website and CRM starter built as a monorepo.

## Stack

- Next.js 15, React, Tailwind CSS, Framer Motion
- Node.js, Express, JWT, PostgreSQL-ready API
- Role-based CRM shell for Super Admin, Receptionist, and Doctor

## Structure

- `apps/web` public marketing site and booking experience
- `apps/api` appointment, CRM, auth, and lead API
- `packages/shared` shared types and validation helpers
- `docs` schema, API, and deployment notes

## Run

1. Install dependencies: `npm install`
2. Copy env files from `apps/api/.env.example`
3. Start both apps: `npm run dev`

## Notes

- The frontend is wired to degrade gracefully if the clinic logo asset is not present yet.
- The backend includes a PostgreSQL schema and an in-memory fallback so the project can be previewed immediately.
