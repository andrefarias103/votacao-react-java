import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class TRepository {
    constructor(private readonly modelName: string) {
        this.modelName = modelName;
    }

    public async create(dataModel: any) {
        const model = await prisma[this.modelName].create({
          data: dataModel,
        });    
        return model;
      }    

      public async findAll(): Promise<any[]> {
        console.log(this.modelName);
        return await prisma[this.modelName].findMany();
      }

}