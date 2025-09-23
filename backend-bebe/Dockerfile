# Base Node.js
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências (vai instalar cors se estiver no package.json)
RUN npm install

# Copiar o restante do código
COPY . .

# Expor porta 25000
EXPOSE 25000

# Comando para rodar o servidor
CMD ["node", "index.js"]
