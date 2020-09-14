# pull official base image	FROM nginx:1.18.0
FROM node:13.12.0-alpine


# set working directory	WORKDIR /srv
WORKDIR /app	COPY build .


# add `/app/node_modules/.bin` to $PATH	COPY default.conf /etc/nginx/conf.d/default.conf
ENV PATH /app/node_modules/.bin:$PATH	EXPOSE 3000

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
