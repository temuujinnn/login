FROM node:alpine



WORKDIR /var/www/bodi

COPY package.json /var/www/bodi
COPY yarn.lock /var/www/bodi

# Production use node instead of root
# USER node

RUN yarn install --production

COPY . /var/www/bodi

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "dev" ]