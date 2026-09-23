FROM node:26-alpine
WORKDIR /app
RUN apk add openssl
COPY package*.json ./
RUN npm install
COPY . .
RUN DATABASE_URL="postgres://cpe:1234@localhost:5432/mydb" npx prisma generate
EXPOSE 5000
CMD ["node", "index.js"]
