FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN apt-get update && apt-get install -y netcat-openbsd

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
