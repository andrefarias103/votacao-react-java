import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class TRepository {
  constructor(private readonly modelName: string) {
    this.modelName = modelName;
  }

  public async create<T>(props?: any) {
    const model = await prisma[this.modelName].create(props);
    return model;
  }

  public async update<T>(props?: any) {
    return await prisma[this.modelName].update(props);
  }

  public async delete<T>(props?: any) {
    return await prisma[this.modelName].delete(props);
  }

  public async findFirst<T>(props?: any): Promise<T[]> {
    return await prisma[this.modelName].findFirst(props);
  }

  public async findAll<T>(props?: any): Promise<T[]> {
    return await prisma[this.modelName].findMany(props);
  }

  public async findById<T>(props?: any) {
    return await prisma[this.modelName].findUnique(props);
  }

  public async findByWhere<T>(props?: any) {
    return await prisma[this.modelName].findMany(props);
  }

  public async recordCountById<T>(props?: any): Promise<number> {
    return await prisma[this.modelName].count(props);
  }
}
