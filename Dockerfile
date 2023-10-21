# syntax=docker/dockerfile:1
FROM node:18-alpine
LABEL org.opencontainers.image.source=https://github.com/Dpbm/shopee-entrega-padrao
WORKDIR /src
COPY package.json pnpm-lock.yaml /src/
RUN npm install -g pnpm && pnpm install --production
COPY . /src
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]