FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variables
ARG VITE_API_KEY
ARG VITE_AUTH_DOMAIN
ARG VITE_PROJECT_ID
ARG VITE_STORAGE_BUCKET
ARG VITE_MESSAGING_SENDER_ID
ARG VITE_APP_ID

ENV VITE_API_KEY=$VITE_API_KEY
ENV VITE_AUTH_DOMAIN=$VITE_AUTH_DOMAIN
ENV VITE_PROJECT_ID=$VITE_PROJECT_ID
ENV VITE_STORAGE_BUCKET=$VITE_STORAGE_BUCKET
ENV VITE_MESSAGING_SENDER_ID=$VITE_MESSAGING_SENDER_ID
ENV VITE_APP_ID=$VITE_APP_ID

# Build the application
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist", "-p", "3000"]