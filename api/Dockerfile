FROM node:22
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
CMD ["yarn", "dev"]