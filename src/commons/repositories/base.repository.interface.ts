export interface RepositoryBaseInterface<T> {
  save(data: T): Promise<void>;
  update(data: T, id: string): Promise<any>;
  delete(id: string): Promise<any>;
  findById(id: string): Promise<T>;
}
