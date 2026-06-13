# Deployment Guide

## GitHub

1. Initialize a repository in this folder.
2. Commit the monorepo after installing dependencies.
3. Keep environment files out of source control.

## Vercel

1. Create a Vercel project for `apps/web`.
2. Set `NEXT_PUBLIC_API_URL` to the deployed API URL.
3. Add any public environment variables required for reviews, maps, or analytics.

## API Hosting

Deploy `apps/api` to a Node.js host or container platform with PostgreSQL access.
