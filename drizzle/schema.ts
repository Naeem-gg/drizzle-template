import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

//define a basic usage table
export const users = pgTable("users",{
    id:uuid("id").primaryKey().defaultRandom(),
    name:varchar("name",{length:255}).notNull()
})