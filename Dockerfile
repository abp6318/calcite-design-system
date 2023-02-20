# syntax=docker/dockerfile:1

# Container for running StencilJS demos or e2e tests (Puppeteer and Jest)
# This is mostly a workaround for:
# - https://github.com/ionic-team/stencil/issues/3853

# Resources:
# - https://docs.docker.com/language/nodejs/build-images/
# - https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker
# - https://stenciljs.com/docs/testing-config

FROM node:16-bullseye-slim
WORKDIR /app

# Copy package files to install dependencies in the container
# node_modules and dist should be in .dockerignore
COPY ["package.json", "package-lock.json*", "./"]

RUN apt-get update \
  && apt-get install -y \
  git \
  gnupg \
  wget \
  # Install Chrome and related Puppeteer system dependencies
  && wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install -y --no-install-recommends \
  google-chrome-stable \
  libxshmfence1 \
  && rm -rf /var/lib/apt/lists/* \
  # Add Puppeteer args to Stencil's testing config
  # Pretty hacky implementation - it relies on the testing block already existing
  # Alternatively, add the options directly the config or a `stencil.docker.config.ts` file
  && perl -pi -e '$_ .= qq(    browserArgs: ["--no-sandbox", "--disable-setuid-sandbox" ],\n) if /^\s+testing\:\s\{\n/' ./stencil.config.ts \
  # Install project's npm dependencies,
  # the legacy-peer-deps flag is only needed for our stencil-eslint dep conflict
  && npm install --legacy-peer-deps \
  # Create non-root user to fix permission issues
  && groupadd -r runner && useradd -r -g runner -G audio,video runner \
  && mkdir -p /home/runner/Downloads \
  && chown -R runner:runner /home/runner \
  && chown -R runner:runner /app/node_modules \
  && chown -R runner:runner /app/package.json \
  && chown -R runner:runner /app/package-lock.json

USER runner

# You can build/test/start/serve the components here (useful in CI):

# COPY . .
# CMD [ "npm", "run", "test" ]


# Copying files in't necessary when using a bind mount so test/start
# npm scripts can correctly rebuild when files change on your host machine
# Or call the test/start/etc npm script afterward the image is created (useful for local development):

#  $ docker build --tag components .
#  $ docker run -i --init --rm -p 3333:3333 --cap-add=SYS_ADMIN -v ./:/app:z --user=$(id -u):$(id -g) --name components-demos components npm start
