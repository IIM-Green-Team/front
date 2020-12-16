# Build stage
FROM node:14.15.1-stretch as build

WORKDIR /app

COPY package.json ./

COPY *.lock ./

RUN yarn

COPY . .

RUN yarn build

# Serve stage
FROM nginx:1.18.0

EXPOSE 80

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .