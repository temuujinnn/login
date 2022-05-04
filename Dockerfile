
FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install 
COPY . .

# FROM node:14
# WORKDIR /app/client

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder ./app/.next ./.next
# COPY ./package*.json ./
# COPY server.js ./server.js  
# # COPY ./.env ./.env
# RUN yarn install --production=true

# EXPOSE 3000
# CMD [ "node", "dist/main.js"]