FROM node:12.14.1-alpine3.10

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN npm install --quiet

COPY . .
EXPOSE 5000
CMD [ "yarn", "start"]
