import knex from "knex";
import "dotenv/config";

export const database = (
  database: string,
  user: string,
  password: string,
  host: string
) => {
  return knex({
    client: "mysql2",
    connection: {
      host: host,
      port: 3306,
      user: user,
      password: password,
      database: database,
      decimalNumbers: true,
      dateStrings: true,
    },
  });
};
