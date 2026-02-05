# Estágio de Build
FROM node:18-alpine as build

WORKDIR /app

# Copia dependências primeiro para cache
COPY package*.json ./
RUN npm ci

# Copia o resto e faz o build
COPY . .
RUN npm run build

# Estágio de Produção (Nginx)
FROM nginx:alpine

# Copia os arquivos do build para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]