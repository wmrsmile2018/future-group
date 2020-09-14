FROM nginx:1.18.0

WORKDIR /srv
COPY build .

COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
