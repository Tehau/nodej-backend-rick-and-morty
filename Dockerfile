# Use a lightweight Node.js base image
FROM node:14-alpine

# Create a non-root user to run the application
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set the working directory inside the container
WORKDIR /user/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Set the user to run the application
USER appuser

# Expose the port on which the application listens
EXPOSE 3000

# Start the Node.js application
CMD ["node", "server.js"]
