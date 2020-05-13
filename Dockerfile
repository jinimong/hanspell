FROM node:10.15.3

MAINTAINER Jacob Kim <jw.kim@datadriven.kr>

RUN mkdir -p /app

WORKDIR /app

ADD myapp /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
