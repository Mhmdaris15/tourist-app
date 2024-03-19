FROM php:8.1 as php

RUN apt-get update -y
RUN apt-get install unzip libpq-dev libcurl4-openssl-dev pkg-config libssl-dev -y
RUN docker-php-ext-install pdo pdo_mysql bcmath curl

# Install Node.js version 20
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Nginx
RUN apt-get install nginx -y
COPY docker/nginx/nginx.conf /etc/nginx/sites-available/default
RUN echo "daemon off;" >> /etc/nginx/nginx.conf


WORKDIR /var/www
COPY . .

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer


ENV PORT=8000
ENTRYPOINT [ "docker/entrypoint.sh" ]