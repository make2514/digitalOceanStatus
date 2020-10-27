FROM ubuntu:16.04
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
WORKDIR /usr/src/digitalOceanStatusApp
COPY . .
RUN apt install -y nodejs && npm install
RUN node -v && npm -v
EXPOSE 3000
CMD npm start