/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url:  'postgresql://neondb_owner:npg_TMB4pGqyNr6U@ep-proud-mud-ade86zow-pooler.c-2.us-east-1.aws.neon.tech/ERIK%20Interview%20Mocker?sslmode=require&channel_binding=require'
    }
};