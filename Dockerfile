# build stage
FROM node:18-alpine as build 

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

CMD ["node", "dist/index.js"] 