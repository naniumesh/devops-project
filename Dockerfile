# Use a minimal Nginx image
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your entire website
COPY . /usr/share/nginx/html/

# Expose port
EXPOSE 80
