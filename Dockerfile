FROM node:18.12.1-slim

WORKDIR /usr/src/app
COPY package.json yarn.lock tsconfig.json tsconfig.build.json nest-cli.json ./
COPY src/ src/

RUN yarn install && yarn build

COPY . ./

CMD [ "yarn", "start:prod" ]