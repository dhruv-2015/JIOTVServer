FROM node:16

# Copy app to /src
COPY . /src

WORKDIR /src

ENV PORT=3500 \
    HOST=0.0.0.0 \
    AUTH_USER=admin \
    AUTH_PASSWORD=password

EXPOSE ${PORT}

RUN npm install -g pm2 yarn

RUN yarn install

CMD ["pm2-runtime", "start", "index.js"]