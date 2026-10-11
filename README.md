# Opticare AI


- Live Link (https://opticare-ai-osg0l.sevalla.app/)


Opticare AI is an eye-care appointment platform built with Next.js. Patients can browse available providers, book appointments, view upcoming appointments, and use an AI voice assistant. Administrators can manage doctors and monitor appointments from a protected dashboard.

## Features

- Clerk authentication
- Eye-care provider directory
- Appointment booking and time-slot availability
- Appointment confirmation emails with Resend and React Email
- AI voice assistant powered by Vapi
- Admin dashboard for doctor and appointment management
- PostgreSQL database managed through Prisma
- Local gender-specific default doctor avatars

## Tech Stack

- Next.js 15 with the App Router
- React 19 and TypeScript
- Prisma 6 with PostgreSQL
- Clerk
- TanStack Query
- Tailwind CSS
- Resend and React Email
- Vapi

## Requirements

- Node.js 18 or newer
- npm
- PostgreSQL database
- Clerk application
- Vapi assistant
- Resend account for email delivery

## Local Setup

1. Install dependencies:

	```bash
	npm ci
	```

2. Create a `.env` file in the project root. Never commit this file.

	```env
	NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key
	CLERK_SECRET_KEY=sk_test_your_key
	DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
	NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id
	NEXT_PUBLIC_VAPI_API_KEY=your_vapi_public_key
	RESEND_API_KEY=re_your_api_key
	ADMIN_EMAIL=admin@example.com
	DEV_BYPASS_ADMIN=false
	NEXT_PUBLIC_APP_URL=http://localhost:3000
	```

3. Generate the Prisma client:

	```bash
	npx prisma generate
	```

4. Start the development server:

	```bash
	npm run dev
	```

5. Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Generate Prisma and create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run Biome checks |
| `npm run format` | Format files with Biome |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page |
| `/appointments` | Provider selection and appointment booking |
| `/dashboard` | Patient dashboard |
| `/voice` | AI voice assistant |
| `/pro` | Subscription and premium features |
| `/admin` | Protected administrator dashboard |
| `/api/send-appointment-email` | Appointment confirmation email endpoint |

## Admin Access

The `/admin` page requires a signed-in Clerk user whose email matches `ADMIN_EMAIL`. The comparison is case-insensitive. Keep `DEV_BYPASS_ADMIN=false` in every shared or production environment; the page no longer uses a development bypass.

Admin server actions should remain protected before deploying any real patient data. Do not use real patient information in a public portfolio demo.

## Database

The Prisma schema is located at `prisma/schema.prisma`. The PostgreSQL connection is read from `DATABASE_URL`.

Useful commands:

```bash
npx prisma generate
npx prisma migrate dev
npx prisma studio
```

Run migrations only when you intentionally want to change the database schema.

## Deployment

The project is configured for a Node.js deployment platform such as Sevalla using these commands:

```text
Install: npm ci
Build:   npm run build
Start:   npm run start
```

Add every required environment variable in the deployment platform. Local `.env` files are not deployed automatically. Set `NEXT_PUBLIC_APP_URL` to the production URL, for example:

```env
NEXT_PUBLIC_APP_URL=https://your-production-domain.com
DEV_BYPASS_ADMIN=false
```

Before redeploying, verify locally:

```bash
npm ci
npm run build
```

## ADMIN page screenshots
you can access the admin page by setting your useremail as the admin email in .env (cannot be accsesed unless admin perms are granted)
<img width="1403" height="1194" alt="image" src="https://github.com/user-attachments/assets/5f79b2c5-04e0-419e-8891-35914e296ec7" />
<img width="494" height="496" alt="image" src="https://github.com/user-attachments/assets/23d8b10c-4acb-44f3-b102-a9cb262c7fe4" />
<img width="480" height="536" alt="image" src="https://github.com/user-attachments/assets/08646b77-38cd-4f6c-be30-b0b8ac1a9b4b" />




