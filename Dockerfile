FROM node:10-jessie

LABEL com.github.actions.name="Now Client Demo Action"
LABEL com.github.actions.description="Testing now-client w/ GitHub Actions"
LABEL repository="https://github.com/coetry/now-client-docker-action"

COPY ./now-client-test /now-client-test

RUN cd /now-client-test && yarn install --production

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

