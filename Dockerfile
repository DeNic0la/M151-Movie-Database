FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .
ENV NODE_OPTIONS=--max_old_space_size=2048
EXPOSE 8080
CMD [ "node", "index.js" ]