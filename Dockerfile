FROM node:13.13.0-alpine3.10 as build

##WORKDIR /home/node/frontend
WORKDIR /tmp/frontend
#USER node

# Build frontend 
#COPY --chown=node:node . ./
 
COPY . ./


RUN npm ci
RUN npm run build



# Build nginx image
# FROM nginx:1.17.6-alpine as release
FROM nginxinc/nginx-unprivileged:latest as release



#COPY --from=build /home/node/frontend/app/build/. /var/www
#COPY --from=build /home/node/frontend/build/. /opt/www

#COPY --from=build /tmp/frontend/build/. /var/www
COPY --from=build /tmp/frontend/build/. /usr/share/nginx/html

#COPY ./nginx.conf.template /tmp/nginx.conf.template

#COPY ./docker-entrypoint.sh /



EXPOSE 8080


ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

