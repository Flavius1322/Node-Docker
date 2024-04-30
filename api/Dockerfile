FROM node:lts AS production

ENV NODE_ENV=production

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

# Build TypeScript code
RUN npm run build

CMD ["sh", "-c", "npm run start:production"]
