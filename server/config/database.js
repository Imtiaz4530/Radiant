module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "your-database-host"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "your-database-name"),
      user: env("DATABASE_USERNAME", "your-database-username"),
      password: env("DATABASE_PASSWORD", "your-database-password"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  },
});
