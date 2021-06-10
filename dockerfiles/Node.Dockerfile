FROM node:15
WORKDIR /app

COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]


#---
#FROM node:12.18
#
#ENV NODE_ENV=production
#RUN mkdir -p /app
#WORKDIR /app
#COPY ["package.json", "package-lock.json*", "./"]
#RUN npm install --production
#
#COPY . .
##COPY . .
##RUN npm ci --cache .npm --prefer-offline
#EXPOSE 3000
#CMD ["npm", "run", "serve"]
#---


#FROM node:12
#ENV NODE_ENV=production
#
#WORKDIR /app
#
#
#RUN npm install --production
#
#COPY . .
#
#CMD ["node", "server.js"]


# args only can be used at build time, and the CMD is executing at run time
# so
#ARG ENV_NAME
#ENV ENV_NAME=${ENV_NAME}
#
#RUN chmod -R 755 ./
#RUN apt update
#RUN apt install -y python3
#RUN apt install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev netcat
#COPY ./node-api/package* /app/
#RUN npm ci --cache .npm --prefer-offline
#COPY ./node-api ./
#CMD [ "/bin/bash", "-ecx", "test -f envs/${ENV_NAME}.environment && source envs/${ENV_NAME}.environment && node_modules/.bin/nodemon --inspect server.js" ]

# CMD ["/app/bin/local-run"]

# CMD ["sleep", "1000000"]
