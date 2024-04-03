import "dotenv/config"
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });
async function main(){

    console.log("migration started...")
    await migrate(drizzle(migrationClient,{logger:true}),{migrationsFolder:"db/migrations"}).catch(err => console.log(err))
    console.log("migration completed successfully")
    await migrationClient.end().catch(err => console.log(err));
    console.log("client connection closed successfully")
}
main()