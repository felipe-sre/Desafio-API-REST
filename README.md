# API de Gerenciamento de Pedidos (Desafio Jitterbit)

Uma API RESTful desenvolvida em Node.js para gerenciar pedidos, permitindo a criação, leitura, atualização e exclusão (CRUD) de dados integrados a um banco de dados MongoDB.

## Tecnologias Utilizadas
* **Node.js** com **Express** (Framework de roteamento)
* **MongoDB** com **Mongoose** (Banco de Dados NoSQL e ODM)
* **Dotenv** (Gerenciamento de variáveis de ambiente)

## Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/) (Rodando localmente ou via Atlas)

## Como executar o projeto

1. Clone este repositório:
\`\`\`bash
git clone https://github.com/felipe-sre/Desafio-API-REST.git
\`\`\`

2. Acesse a pasta do projeto e instale as dependências:
\`\`\`bash
cd NOME_DO_PASTA
npm install
\`\`\`

3. Crie um arquivo `.env` na raiz do projeto contendo a string de conexão do seu banco e a porta:
\`\`\`env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/desafio_jitterbit
\`\`\`

4. Inicie o servidor:
\`\`\`bash
node server.js
\`\`\`

## 📍 Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/order` | Cria um novo pedido (Recebe JSON no body). |
| `GET` | `/order/list` | Retorna uma lista com todos os pedidos. |
| `GET` | `/order/:orderId` | Retorna os detalhes de um pedido específico. |
| `PUT` | `/order/:orderId` | Atualiza um pedido específico. |
| `DELETE` | `/order/:orderId` | Deleta um pedido específico. |

---