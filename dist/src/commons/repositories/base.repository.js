"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryBase = void 0;
class RepositoryBase {
    constructor(table, database) {
        this.table = table;
        this.database = database;
    }
    async save(data) {
        await this.database.table(this.table).insert(data);
    }
    async update(data, id) {
        await this.database.table(this.table).update(data).where("id", "=", id);
    }
    async delete(id) {
        await this.database.table(this.table).delete().where("id", "=", id);
    }
    async findById(id) {
        const data = this.database
            .table(this.table)
            .select("*")
            .where("id", "=", id)
            .first();
        return await data;
    }
}
exports.RepositoryBase = RepositoryBase;
