import "dotenv/config"
import {defineConfig} from "drizzle-kit"

export default defineConfig({
    driver:"pg",
    schema:"./db/schema.ts",
    out:"./db/migrations",
    dbCredentials:{
connectionString:process.env.DATABASE_URL as string
    },
    strict:true,
    verbose:true
})