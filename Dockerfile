FROM node:16-slim

ENV HOME=/home/node
WORKDIR /app
RUN adduser node root && chown node:root /app $HOME && chmod g=u /app $HOME

RUN apt update && apt install -y git

USER node:root

COPY --chown=node:root package.json package-lock.json tsconfig.json babel.config.js ./
RUN npm ci --only=production && npm cache clean --force

COPY --chown=node:root docusaurus.config.js sidebars.js ./
COPY --chown=node:root .git ./.git
COPY --chown=node:root src ./src
COPY --chown=node:root docs ./docs
COPY --chown=node:root blog ./blog
COPY --chown=node:root static ./static

RUN npm run build

ENTRYPOINT ["npm"]
CMD ["run", "serve"]
