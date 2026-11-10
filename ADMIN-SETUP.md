# Sombrilla Beheer (admin dashboard) – setup

Het dashboard staat op `/admin`. Het is overgenomen van het SCA-project en gebruikt **Next.js · Drizzle · Neon (Postgres) · Clerk · Resend · Vercel Blob**.

## Wat kan de admin?

- **Dashboard**: overzicht en aankomende afspraken
- **Kalender / Afspraken / Beschikbaarheid**: boekingen via `/book` beheren, openingstijden en geblokkeerde dagen
- **Diensten**: de boekbare diensten (gesprekken) beheren
- **Pagina's**: SEO-titel en -beschrijving per pagina
- **Blog & nieuws**: artikelen met foto's, zichtbaar op `/insights`
- **Media**: afbeeldingen en PDF's uploaden
- **Contact**: berichten van het contactformulier lezen

## Veiligheid

Zonder Clerk-sleutels is `/admin` in productie **dicht** (503). De "demo-modus" zonder login werkt alleen lokaal (`npm run dev`).

## Productie instellen (Vercel)

1. **Neon**: maak een eigen project op https://neon.tech en kopieer de *pooled* connection string.
2. **Clerk**: maak een eigen app op https://dashboard.clerk.com en kopieer de API keys.
3. **Resend**: maak een API key op https://resend.com en verifieer het domein sombrillagroup.com.
4. **Vercel Blob**: maak in het Vercel-project een Blob store (voor foto-uploads).
5. Zet deze variabelen in Vercel (Project → Settings → Environment Variables):

   | Variabele | Waarde |
   |---|---|
   | `DATABASE_URL` | Neon pooled connection string |
   | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
   | `CLERK_SECRET_KEY` | Clerk secret key |
   | `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | `/admin/login` |
   | `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | `/admin` |
   | `RESEND_API_KEY` | Resend API key |
   | `EMAIL_FROM` | `Sombrilla Group <no-reply@sombrillagroup.com>` |
   | `ADMIN_EMAIL` | `info@sombrillagroup.com` |
   | `NEXT_PUBLIC_APP_URL` | de publieke URL, zonder slash aan het eind |

6. Database vullen (eenmalig, lokaal met `DATABASE_URL` in `.env.local`):

   ```bash
   npm run db:push
   npm run db:seed
   ```

7. **Admin-gebruiker**: maak in Clerk een gebruiker aan, open die gebruiker → *Public metadata* → voeg toe:

   ```json
   { "role": "admin" }
   ```

   Alleen gebruikers met `role: "admin"` komen in `/admin`. Inloggen via `/admin/login`.

## Lokaal draaien

```bash
npm run db:seed   # lokale demo-database (PGlite) vullen
npm run dev       # http://localhost:3217 (of de poort die je kiest)
```
