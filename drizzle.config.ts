import "dotenv/config"
import {defineConfig} from "drizzle-kit"

export default defineConfig({
    driver:"pg",
    schema:"./drizzle/schema.ts",
    out:"./drizzle/migrations",
    dbCredentials:{
connectionString:process.env.DATABASE_URL as string
    },
    strict:true,
    verbose:true
})