FROM node:16.13.2-alpine
WORKDIR /home/masida
COPY . .


RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]