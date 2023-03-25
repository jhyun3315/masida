FROM node:16.13.2-alpine

# RUN mkdir -p /home/masida

# WORKDIR /home/masida
COPY . .
# RUN mkdir -p build


# RUN npm install --force && npm run build

# RUN npm run build

# COPY package.json package-lock.json ./app/
# RUN npm install
# COPY . .

# RUN npm cache clean --force
# RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]