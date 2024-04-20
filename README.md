<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

<bR>
<h1 align="center">
Votação Pautas
</h1>

<bR>

<h3 style="color:#F59527; font-weight: bold;"> Descrição</h3>
 
Este projeto visa fornecer uma solução WEB para gerenciar e participar de sessões de votação.


<h3 id="requirements" style="color:#F59527; font-weight: bold;">Ferramentas Utilizadas</h3>

  _Requisitos para a execução do projeto_

  - Docker
  - Docker Compose

  _Plugins VSCode: (Sugestões)_

  - editorconfig
  - prettier
  - eslint

<h3 id="project_run" style="color:#F59527; font-weight: bold;">Instalação do projeto </h3>
Siga as instruções abaixo para configurar e executar a aplicação:

1. Clone este repositório:

   ```bash
   git clone https://github.com/andrefarias103/votacao-react-java.git```

2. Navegue até o diretório do projeto:

   ```bash
   cd repositorio
    
3. Instale dependências:

   ```bash
   npm install

4. Instancie o banco de dados:

   ```bash
   npx prisma migrate reset
   npx prisma generate   
   
5. Ative o banco de dados no Docker

   ```bash
   docker-compose up -d

   
<h3 id="project_run" style="color:#F59527; font-weight: bold;">Executar a aplicação</h3>

A aplicação estará em execução em http://localhost:3000 por padrão. Você pode alterar a porta nas configurações.

  ```bash
  npm run start:dev
  ```


<h3 id="project_run" style="color:#F59527; font-weight: bold;">Scripts</h3>

 ```bash
start:dev: Inicia a aplicação em modo de desenvolvimento com recarga automática (npm run start:dev).
start: Inicia a aplicação em modo de produção (npm start).
build: Compila o projeto para produção (npm run build).
```


<h3 id="project_run" style="color:#F59527; font-weight: bold;">Testes</h3>

Para executar os testes, use o comando:

 ```bash
npm run test
```

<h3 id="project_run" style="color:#F59527; font-weight: bold;">Contribuições</h3>
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.


<h3 id="project_run" style="color:#F59527; font-weight: bold;">Licença</h3>
Este projeto está licenciado sob a MIT License.
