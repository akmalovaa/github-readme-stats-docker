FROM node:19.4-slim
ENV NODE_ENV production
WORKDIR /app
RUN apt update && apt install -y git
RUN git clone https://github.com/anuraghazra/github-readme-stats.git .
RUN npm i express morgan
COPY app.js .
EXPOSE 3000
CMD ["node", "app.js"]