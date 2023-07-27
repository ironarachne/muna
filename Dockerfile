# build stage
FROM node:20-alpine as build 

WORKDIR /app 

COPY package*.json ./ 

RUN npm install 

COPY . . 

RUN npm run build 

# production stage
FROM node:18-alpine as production 

WORKDIR /app 

COPY --from=build /app/package*.json ./ 

RUN npm install --omit=dev 

COPY --from=build /app/dist ./dist 

EXPOSE 3000

ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true \
NEW_RELIC_LOG=stdout

CMD ["node", "dist/index.js"] 