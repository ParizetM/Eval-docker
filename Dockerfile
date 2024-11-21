FROM ubuntu/apache2:latest
RUN apt-get update && apt-get install -y \
    npm

COPY app /app

WORKDIR /app

RUN npm install
RUN npm install jasmine angular-mocks --save-dev

EXPOSE 8080
RUN rm /var/www/html -R
RUN ln -s /app /var/www/html
RUN chown -R www-data:www-data /app /var/www/html