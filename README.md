# API de Gerenciamento de Pedidos (Desafio Jitterbit)

Uma API RESTful desenvolvida em Node.js para gerenciar pedidos, permitindo a criação, leitura, atualização e exclusão (CRUD) de dados integrados a um banco de dados MongoDB. Este projeto inclui um sistema de autenticação via **JWT (JSON Web Token)** para proteger rotas sensíveis.

## Tecnologias Utilizadas
* **Node.js** com **Express** (Framework de roteamento)
* **MongoDB** com **Mongoose** (Banco de Dados NoSQL e ODM)
* **JWT (jsonwebtoken)** (Autenticação e segurança de rotas)
* **Dotenv** (Gerenciamento de variáveis de ambiente)
* **ThunderClient** (Cliente HTTP para simulação e teste de requisições)

## Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/) (Rodando localmente ou via Atlas)

## 🔧 Como executar o projeto

1. Clone este repositório:
\`\`\`bash
git clone https://github.com/felipe-sre/Desafio-API-REST.git
\`\`\`

2. Acesse a pasta do projeto e instale as dependências:
\`\`\`bash
cd NOME_DO_PASTA
npm install
\`\`\`

3. Crie um arquivo `.env` na raiz do projeto contendo as seguintes variáveis:
\`\`\`env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/desafio_jitterbit
JWT_SECRET=sua_chave_secreta_aqui
\`\`\`

4. Inicie o servidor:
\`\`\`bash
node server.js
\`\`\`

## Autenticação (JWT)
Para acessar as rotas protegidas (Criação, Atualização e Exclusão), é necessário primeiro gerar um token de acesso.
Faça uma requisição `POST` para a rota `/login`. Copie o token retornado e envie-o no cabeçalho das requisições subsequentes no formato:
`Authorization: Bearer <seu_token>`

## Endpoints da API

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| `POST` | `/login` | Gera o token JWT para acesso. | Não |
| `GET` | `/order/list` | Retorna uma lista com todos os pedidos. | Não |
| `GET` | `/order/:orderId` | Retorna os detalhes de um pedido específico. | Não |
| `POST` | `/order` | Cria um novo pedido (Recebe JSON no body). | Sim |
| `PUT` | `/order/:orderId` | Atualiza um pedido específico. | Sim |
| `DELETE` | `/order/:orderId` | Deleta um pedido específico. | Sim |

---
