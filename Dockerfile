FROM node:latest

WORKDIR /www

RUN npm install -g nodemon sequelize-cli mysql2

COPY package.json .
RUN npm install --quiet

COPY . src/

CMD ["npm", "start"]