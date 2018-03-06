FROM gcr.io/google-appengine/nodejs

RUN /usr/local/bin/install_node '7.6.0'

COPY ./app /app/

RUN npm install --unsafe-perm || \
  ((if [ -f npm-debug.log ]; then \
      cat npm-debug.log; \
    fi) && false)