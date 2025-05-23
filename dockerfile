FROM node:23-alpine
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
EXPOSE 3000
RUN npm ci
RUN npm run build

CMD ["npm", "run", "start", "--exp-backoff-restart-delay=100"]