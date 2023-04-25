import { Knex } from "knex";
import { RepositoryBaseInterface } from "./base.repository.interface";
export declare class RepositoryBase<T> implements RepositoryBaseInterface<T> {
    private table;
    private database;
    constructor(table: string, database: Knex);
    save(data: T): Promise<void>;
    update(data: T, id: string): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<T>;
}
