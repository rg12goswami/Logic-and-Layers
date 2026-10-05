# Logic & Layers API

Express + MongoDB backend for the inquiry form. Saves each submission to
MongoDB Atlas and emails you a notification via Resend.

## 1. Install

```bash
npm install
```

## 2. Set up MongoDB Atlas

1. Create a free account at atlas.mongodb.com and create a free M0 cluster.
2. Under **Database Access**, create a database user with a password.
3. Under **Network Access**, add your current IP (or `0.0.0.0/0` while
   developing — tighten this before going to production).
4. Click **Connect** on your cluster → **Drivers** → copy the connection
   string. It looks like:
   ```
   mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<user>` / `<password>` with your database user's credentials,
   and insert a database name before the `?` — e.g. `.../logic-and-layers?retryWrites=...`.
   Mongoose creates that database automatically on first write.

## 3. Set up Resend (email notifications)

1. Create a free account at resend.com and grab an API key from
   **API Keys** in the dashboard.
2. For local testing, leave `FROM_EMAIL` as `onboarding@resend.dev` — Resend's
   shared sandbox address. It only delivers to the email you signed up to
   Resend with, which is fine since that's your own inbox.
3. Set `NOTIFY_EMAIL` to that same address (or a different one you verify
   later).
4. Before real launch: verify your own domain in Resend (**Domains** tab,
   a few DNS records), then set `FROM_EMAIL` to something like
   `inquiries@logicandlayers.dev` so you can notify any address, not just
   your own.

## 4. Configure environment variables

```bash
cp .env.example .env
```

Fill in `MONGODB_URI`, `RESEND_API_KEY`, `FROM_EMAIL`, and `NOTIFY_EMAIL`.

## 5. Run it

```bash
npm run dev
```

You should see `Connected to MongoDB` and `API listening on http://localhost:4000`.

## 6. Point the frontend at it

In the **frontend** project (`logic-and-layers/`), create a `.env` from its
`.env.example` and set:

```
VITE_API_URL=http://localhost:4000/api
```

Restart `npm run dev` on the frontend. Submitting the contact form now:
1. Saves a document to the `inquiries` collection in Atlas.
2. Emails `NOTIFY_EMAIL` with the submission details, with `replyTo` set to
   the inquirer's address so you can hit reply directly.

## Endpoints

- `GET /api/health` — returns `{ ok: true }`, useful for a quick sanity check.
- `POST /api/inquiries` — body: `{ name, email, company, projectType, budget, description }`.
  Returns `201 { id }` on success, `400`/`500` with `{ message }` on failure.

## Deploying

Any Node host works (Render, Railway, Fly.io, a VPS). Set the same
environment variables there, set `CLIENT_ORIGIN` to your live frontend's
URL, and point the frontend's `VITE_API_URL` at the deployed API's URL.
