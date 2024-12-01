
# Use the official Node.js image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /text_to_video

# Copy package.json and package-lock.json first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the TypeScript code
RUN npm run dev

# Expose the application port
EXPOSE 3000

# Start the app using the compiled JavaScript
# CMD ["node", "dist/index.js"]
