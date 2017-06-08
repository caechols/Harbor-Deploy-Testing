FROM node:4.3.1

RUN mkdir -p /opt/harborexample-node

ADD . /opt/harborexample-node

RUN cd /opt/harborexample-node; npm install;

CMD [ "node", "/opt/harborexample-node/app.js" ]