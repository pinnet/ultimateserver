FROM node:current-alpine3.10

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node /home/node/app

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8443

CMD [ "node", "app.js" ]
