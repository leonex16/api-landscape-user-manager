FROM node:18.11.0-alpine3.16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm install --force --no-fund --no-audit
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]