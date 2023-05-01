import knex from 'knex'
import 'dotenv/config'

export const database = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.PASSWORD_BD || "123456",
    database: 'store_manager',
    decimalNumbers: true,
    dateStrings: true
  }
})