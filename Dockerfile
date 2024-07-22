
FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 4000

CMD [ "npm", "run","start:dev" ]
