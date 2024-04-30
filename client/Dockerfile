FROM node:lts AS production

ENV NODE_ENV=production

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

CMD ["npm", "start"]

