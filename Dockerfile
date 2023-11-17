FROM nginx:alpine

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/html/

# Set working directory
WORKDIR /var/www/html

# Copy NGINX configuration
COPY ./docker-compose/nginx/mp3quran.conf /etc/nginx/conf.d/default.conf

RUN composer install

RUN npm install

# Expose port 80
EXPOSE 80


# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
