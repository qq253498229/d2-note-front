FROM registry.cn-beijing.aliyuncs.com/codeforfun/cnpm:alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=0 /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
