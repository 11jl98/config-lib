import { Knex } from "knex";
import { RepositoryBaseInterface } from "./base.repository.interface";

export class RepositoryBase<T> implements RepositoryBaseInterface<T> {
  private table: string;
  private database: Knex;
  constructor(table: string, database: Knex) {
    this.table = table;
    this.database = database;
  }

  async save(data: T) {
    await this.database.table(this.table).insert(data);
  }

  async update(data: T, id: string) {
    await this.database.table(this.table).update(data).where("id", "=", id);
  }

  async delete(id: string) {
    await this.database.table(this.table).delete().where("id", "=", id);
  }

  async findById(id: string): Promise<T> {
    const data = this.database
      .table(this.table)
      .select("*")
      .where("id", "=", id)
      .first();
    return await data;
  }
}
