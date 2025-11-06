# CRM with Username/Password Auth, JWT, and Roles (Admin/Staff)

## Quick Start

### 1) Server
```bash
cd server
cp .env.example .env
npm i
npm run prisma:generate
npm run prisma:push   # creates DB schema
npm run dev
```
Server runs on http://localhost:4000

### 2) Web
```bash
cd web
cp .env.example .env
npm i
npm run dev
```
Web runs on http://localhost:3000

### Default Users
Use the register endpoint to create the first admin:
```bash
curl -X POST http://localhost:4000/api/auth/register  -H "Content-Type: application/json"  -d '{"username":"admin","password":"change-me","role":"ADMIN"}'
```
Then login at http://localhost:3000/login

### Notes
- JWT is stored in an **HTTP-only cookie** set by the server.
- CORS is enabled with credentials for local dev (localhost:3000 -> 4000).
- Prisma uses SQLite by default for simplicity; switch to Postgres in `.env` if desired.
