FROM node:26-alpine
WORKDIR /app
RUN apk add openssl
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
