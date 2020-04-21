# FROM node:12
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN yarn
# COPY . .
# EXPOSE 3000
# CMD [ "yarn", "start" ]


FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
# COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]