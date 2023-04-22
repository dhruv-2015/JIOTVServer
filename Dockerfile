FROM node:16.3.0-alpine

# Copy app to /src
COPY . /src

WORKDIR /src

ENV PORT=3500

EXPOSE ${PORT}

ENTRYPOINT ["sh", "start.sh"]

CMD ["sh", "start.sh"]