# 🍕 pizzaria-backend 🍕

## Conteúdo
* [Sobre](#sobre)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Licença](#balance_scale-licença)

## Sobre
Backend completo para pizzaria desenvolvido durante o curso [Projeto Completo NodeJS, React, React Native, TypeScript](https://www.udemy.com/course/dev-fullstack/), do prof. Matheus Fraga.<br />

## :hammer_and_wrench: Tecnologias
* Back-end
  * __Node.js__ com Typescript
  * __Prisma ORM__ para acessar o banco de dados
  * Autenticação __JTW__
  * __Multer__ para upload de imagens

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.
```bash
$ git clone https://github.com/EvertonCarvalho1/pizzaria_backend.git
```

### __Back-end__
Na pasta backend, renomeie o arquivo _.env.example_ para _.env_<br/>
Informe os dados do banco PostgreSQL na variável __DATABASE_URL__.<br/>
Informe a palavra secreta da API na variável __JWT_SECRET__<br/>
```bash
# Instale as dependências
$ yarn

# Para iniciar a aplicação na porta 3333
$ yarn dev
```
## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

