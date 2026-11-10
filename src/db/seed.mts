import { db, dbReady } from "./index";
import { migrateLocalDb, type LocalDb } from "./local";
import * as schema from "./schema";

async function main() {
  if (!dbReady) {
    console.log("Geen DATABASE_URL geconfigureerd — migreert lokale PGlite-database…");
    await migrateLocalDb(db as LocalDb);
  }

  console.log("Seeding database…");

  // Bookable services (appointments with Sombrilla)
  const existing = await db.select({ id: schema.services.id }).from(schema.services).limit(1);
  if (existing.length === 0) {
    await db.insert(schema.services).values([
      {
        name: "Free consultation call",
        description: "A no-obligation conversation about your business goals and how Sombrilla can help.",
        durationMinutes: 30,
        price: null,
        currency: "USD",
        sortOrder: 1,
      },
      {
        name: "Business consulting session",
        description: "A focused session on strategy, operations, outsourcing or business development.",
        durationMinutes: 60,
        price: null,
        currency: "USD",
        sortOrder: 2,
      },
      {
        name: "Event management intake",
        description: "Plan your conference, summit or corporate event with our event management team.",
        durationMinutes: 45,
        price: null,
        currency: "USD",
        sortOrder: 3,
      },
    ]);
  }

  // Availability: Mon–Fri 08:00–17:00 (as on the website), weekend closed
  const hasAvailability = await db.select({ id: schema.availability.id }).from(schema.availability).limit(1);
  if (hasAvailability.length === 0) {
    const days = [0, 1, 2, 3, 4, 5, 6].map((d) => ({
      dayOfWeek: d,
      startTime: "08:00",
      endTime: "17:00",
      isOpen: d >= 1 && d <= 5,
      slotDurationMinutes: 30,
      maxBookingsPerSlot: 1,
    }));
    await db.insert(schema.availability).values(days);
  }

  // Settings
  await db
    .insert(schema.settings)
    .values([
      { key: "site_name", value: "Sombrilla Group of Companies" },
      {
        key: "contact",
        value: {
          address: "Savaneta 175E, Aruba",
          phone: "+297-5611206",
          email: "info@sombrillagroup.com",
        },
      },
    ])
    .onConflictDoNothing();

  // Pages (SEO + intro text, editable in the admin)
  await db
    .insert(schema.pages)
    .values([
      { slug: "home", title: "Home", content: { text: "" }, seoTitle: "Sombrilla Group – Developing businesses to achieve the results you desire", seoDescription: "Sombrilla Group of Companies provides solutions for business development and outsourcing needs.", isPublished: true },
      { slug: "about", title: "About", content: { text: "" }, seoTitle: "About | Sombrilla Group of Companies", seoDescription: "Learn about Sombrilla Group of Companies, our mission, vision and values.", isPublished: true },
      { slug: "services", title: "Services", content: { text: "" }, seoTitle: "Services | Sombrilla Group of Companies", seoDescription: "Consulting, business, technology and event management services.", isPublished: true },
      { slug: "contact", title: "Contact", content: { text: "" }, seoTitle: "Contact | Sombrilla Group of Companies", seoDescription: "Get in touch with the Sombrilla Group team.", isPublished: true },
    ])
    .onConflictDoNothing();

  console.log("✓ Seed complete.");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
