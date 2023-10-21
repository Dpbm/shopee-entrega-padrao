# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install && pnpm build
CMD ["pnpm", "start"]
EXPOSE 3000