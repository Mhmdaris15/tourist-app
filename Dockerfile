FROM php:8.1 as php

RUN apt-get update -y
RUN apt-get install unzip libpq-dev libcurl4-openssl-dev pkg-config libssl-dev -y
RUN docker-php-ext-install pdo pdo_mysql bcmath curl


WORKDIR /var/www
COPY . .

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer


ENV PORT=8000
ENTRYPOINT [ "docker/entrypoint.sh" ]