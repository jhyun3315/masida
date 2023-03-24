FROM node:18.12.1
WORKDIR ./app
COPY package.json package-lock.json ./app/
RUN npm install
COPY . .

RUN npm cache clean --force
RUN npm run build

CMD ["npm", "run", "start"]