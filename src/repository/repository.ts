import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// const fs = require('fs');

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
        return await prisma[this.modelName].findMany();
      }

      public async findById(dataModel: any) {
        return await prisma[this.modelName].findUnique({ 
            where: dataModel
          });
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

      public async update(dataModel: any, filter: any) {
        return await prisma[this.modelName].update({ 
          data: dataModel,        
          where: filter
        });        
      }
}
