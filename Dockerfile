# start from the latest image of node.js
from node
# create a directory for the application on the host machine
WORKDIR /usr/src/app
# copy both package.json and package-lock.json to the target directory
COPY package*.json ./
# copy the typescript config
COPY tsconfig*.json ./
# install all dependancies in a node_modules folder
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# copy all the rest of the source to the target directory
COPY ./ ./
# now use webpack to transpile the TypeScript into a single javascript file
RUN npm run webpack
