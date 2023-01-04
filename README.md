# CRUD utilizando o node com banco mysql hospedado com RailWay


Para executar o projeto de api backend criada com CodeFirst é necessário:
- Ter o node instalado;
- Rodar os comandos: 
    npm i
    node index.js (para utilizar o arquivo de testes index que faz inserções diretamente por meio da classe de modelo Produto)
    ou
    node server.js (para iniciar a aplicação em servidor local utilizando o express);


Detalhes de desenvolvimento:
**Etapa 1:**
A classe Produto desenvolvida inicialmente como modelo é utilizada ao executar o index.js servindo como referência para aprendizado e produção da estrutura do programa.
**Etapa 2:**
Definição de estrutura de diretórios e rotas do programa, acrescentando o arquivo de variaveis de ambiente .env
**Etapa 3:**
Implementação do crud com uma classe genérica para servir de base para as demais telas
