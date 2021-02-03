FROM node:14.15-buster

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo


WORKDIR /app

COPY ./package.json ./yarn.lock ./

RUN set -ex \
  && yarn install
