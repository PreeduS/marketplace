FROM node:13.13.0-alpine3.10 as build

WORKDIR /home/node/frontend

COPY . ./

RUN npm ci
RUN npm run build



# Build nginx image

FROM nginxinc/nginx-unprivileged:latest as release


COPY --from=build /home/node/frontend/build/. /usr/share/nginx/html

COPY ./conf.d/default.conf /tmp/default.conf 

COPY ./docker-entrypoint.sh /



EXPOSE 8080


ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

