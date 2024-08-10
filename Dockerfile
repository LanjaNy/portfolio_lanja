FROM node:18-alpine
LABEL maintainer="Ny Fahafahana Lanja <rnflanja06@gmail.com>"
LABEL version="0.0.1"

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
