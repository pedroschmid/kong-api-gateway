FROM node:alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]