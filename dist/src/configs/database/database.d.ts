import "dotenv/config";
export declare const database: (database: string, user: string, password: string, host: string) => import("knex").Knex<any, unknown[]>;
