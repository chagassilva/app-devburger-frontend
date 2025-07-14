FROM node:20
WORKDIR /app
COPY . .
COPY .env.production .env
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
