import { pgTable, serial, varchar } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const test = pgTable("test", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name").notNull(),
	password: varchar("password").notNull(),
	email: varchar("email").notNull(),
});