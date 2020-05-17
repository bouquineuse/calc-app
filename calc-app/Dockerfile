FROM node:alpine

# for npm ci
RUN apk update && apk add python make g++

WORKDIR '/app'

COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN $(npm bin)/ng build --prod


FROM nginx:alpine
EXPOSE 80
COPY --from=0 /app/dist/calc-app/ /usr/share/nginx/html
