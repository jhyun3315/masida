FROM node:18.12.1 AS build

RUN mkdir -p /home/masida

WORKDIR /home/masida
COPY . .
RUN mkdir -p build
RUN npm install
RUN npm run build

# COPY package.json package-lock.json ./app/
# RUN npm install
# COPY . .

# RUN npm cache clean --force
# RUN npm run build

CMD ["npm", "run", "start"]