FROM node:16.13.2-alpine
WORKDIR /home/masida
COPY . .


RUN yarn install
EXPOSE 3000
CMD ["npm", "run", "start"]