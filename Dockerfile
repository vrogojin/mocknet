# Use an official node image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package and lock files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Test smart contract
RUN npx hardhat test

# Install Hardhat globally
RUN npm install -g hardhat

# Expose port for Hardhat node
EXPOSE 8545

CMD ["sh", "-c", "npx hardhat node & sleep 5 && npx hardhat run scripts/deploy.js --network localhost && tail -f /dev/null"]
