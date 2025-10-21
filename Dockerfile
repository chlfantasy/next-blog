# 使用Node.js镜像作为构建环境
FROM node:22-alpine AS builder
# 设置工作目录
WORKDIR /app
# 复制包管理文件以利用Docker缓存层
COPY package.json package-lock.json* ./
# 安装依赖（包括devDependencies，因为需要构建）
RUN npm install
# 复制项目文件
COPY. .
# 构建应用
RUN npm run build
# 使用更小的基础镜像来运行应用
FROM node:22-alpine AS runner
# 设置工作目录
WORKDIR /app
# 从构建阶段复制构建输出和依赖，减小镜像体积
COPY --from=builder /app/.next./.next
COPY --from=builder /app/node_modules./node_modules
COPY --from=builder /app/package.json./package.json
COPY --from=builder /app/public./public
# 环境变量
ENV NODE_ENV=production
# 使用非root用户端口
EXPOSE 3000
# 启动命令
CMD ("npm", "start")