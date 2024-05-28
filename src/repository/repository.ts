import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// const fs = require('fs');

export class TRepository {
    constructor(private readonly modelName: string) {
      this.modelName = modelName;
    }

    public async create<T>(props?:any) {      
      const model = await prisma[this.modelName].create(props);    
      return model;
    }    

    public async update<T>(props?:any) {
      return  await prisma[this.modelName].update(props);
    }

    public async delete<T>(props?:any) {
      return  await prisma[this.modelName].delete(props);
    }

    public async findFirst<T>(props?:any): Promise<T[]> 
    {
      return  await prisma[this.modelName].findFirst(props);
    }

    public async findAll<T>(props?:any): Promise<T[]> 
    {
      return  await prisma[this.modelName].findMany(props);
    }

    public async findById<T>(props?:any) {     
      return await prisma[this.modelName].findUnique(props);        
    }
      

    public async findByWhere<T>(props?:any) {
      return await prisma[this.modelName].findMany(props);
    }
  
    public async recordCountById<T>(props?:any): Promise<number> {
      return await prisma[this.modelName].count(props);
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