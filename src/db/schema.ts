import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }), 
  email: varchar('email', { length: 255 }).notNull().unique(),
  emailVerified: timestamp('email_verified'), 
  username: varchar('username', { length: 255 }).unique(), 
  image: text('image'),
  
  provider: varchar('provider', { length: 255 }),
  providerId: varchar('provider_id', { length: 255 }),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
