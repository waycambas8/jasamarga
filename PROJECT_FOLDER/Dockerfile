FROM node:20.4.0-alpine

WORKDIR /usr/app
COPY package.json .
RUN npm install rxjs 
RUN npm install --quiet
COPY . .