import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// const fs = require('fs');

export class TRepository {
    constructor(private readonly modelName: string) {
      this.modelName = modelName;
    }

    public async create<T>(dataModel:T) {
      const model = await prisma[this.modelName].create({
        data: dataModel,
      });    
      return model;
    }    

    public async update<T>(props?:any) {
      return  await prisma[this.modelName].update(props);
    }

    public async delete<T>(props?:any) {
      return  await prisma[this.modelName].delete(props);
    }

    public async findAll<T>(props?:any): Promise<T[]> 
    {
      return  await prisma[this.modelName].findMany(props);
    }

    public async findById<T>(props?:any) {     
      return await prisma[this.modelName].findUnique(props);        
    }

    public async findByWhere<T>(dataModel:T) {
      return await prisma[this.modelName].findMany({ 
          where: dataModel
        });
    }
  
    public async recordCountById<T>(dataModel: T): Promise<number> {
      return await prisma[this.modelName].count({
                                                  where: dataModel   
                                                });
    }

}





      // public async generateSeed() {
      //   const users = await prisma.usuario.findMany();
      //   const categories = await prisma.categoria.findMany();
      //   const agenda = await prisma.pauta.findMany();
      //   const session = await prisma.sessao.findMany();
      //   const vote = await prisma.votacao.findMany();

      //   // Aqui você pode processar os dados como desejar e escrever em um arquivo de seed
      //   const seedData = {
      //     users,
      //     categories,
      //     agenda,
      //     session,
      //     vote,
      //   };

      //   fs.writeFileSync('seedData.json', JSON.stringify(seedData, null, 2));

      //   console.log('Arquivo de seed gerado com sucesso!');
      //   }