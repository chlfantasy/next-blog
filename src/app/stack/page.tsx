import { Card } from "@/components/ui/card";
import { Link } from "lucide-react";
import Image from "next/image";
import { truncateText } from "@/utils/text";

const stackList = [
  {
    title: "Vue",
    description: "一个用于构建用户界面的渐进式 JavaScript 框架.",
    link: "https://vuejs.org/",
    iconSrc: "https://api.iconify.design/devicon:vuejs.svg",
  },
  {
    title: "React",
    description:
      "React 是一个用于构建用户界面的开源 JavaScript 库，由 Facebook 于 2013 年开源，目前由 Meta 和社区共同维护。它主要用于开发具有复杂交互逻辑的单页面应用（SPA，Single Page Application）以及移动应用的前端部分。",
    link: "https://reactjs.org/",
    iconSrc: "https://api.iconify.design/devicon:react.svg",
  },
  {
    title: "Next.js",
    description:
      "Next.js 是一个 React 框架，支持服务器端渲染和为基于 React 的 Web 应用程序生成静态网站等功能。",
    link: "https://nextjs.org/",
    iconSrc: "https://api.iconify.design/devicon:nextjs.svg",
  },
  {
    title: "Tailwind CSS",
    description:
      "一个实用优先的 CSS 框架，帮助您快速构建现代设计，而无需离开 HTML。",
    link: "https://tailwindcss.com/",
    iconSrc: "https://api.iconify.design/logos:tailwindcss-icon.svg",
  },
  {
    title: "TypeScript",
    description: "一个编译为普通 JavaScript 的 JavaScript 超集。",
    link: "https://www.typescriptlang.org/",
    iconSrc: "https://api.iconify.design/skill-icons:typescript.svg",
  },
  {
    title: "Vercel",
    description: "一个完美契合您工作流程的静态网站和无服务器函数的云平台。",
    link: "https://vercel.com/",
    iconSrc: "https://api.iconify.design/devicon:vercel.svg",
  },
  {
    title: "GitHub",
    description: "一个用于版本控制和协作的代码托管平台。",
    link: "https://github.com/",
    iconSrc: "https://api.iconify.design/devicon:github.svg",
  },
  {
    title: "Vite",
    description:
      "Vite 是一个（Evan You，Vue.js 的创始人）前端构建工具，旨在提供比传统构建工具（如 Webpack）更快的开发体验。Vite 采用了现代浏览器支持的技术（如原生 ES 模块）和对开发时的热重载优化，使得开发过程中编译和刷新速度大幅提高。它可以支持 Vue、React、Svelte 等多种框架，成为现代前端开发的一个重要工具。",
    link: "https://github.com/vitejs/vite",
    iconSrc: "https://api.iconify.design/devicon:vite.svg",
  },
  {
    title: "Webpack",
    description:
      "Webpack 是一个流行的前端模块打包工具，它将项目中的 JavaScript、CSS、图片等资源视为模块，通过构建流程将其打包为高效可部署的静态文件。Webpack 支持模块依赖分析、代码分割、热更新、按需加载等功能，广泛用于现代前端工程化开发，提升构建效率与性能。",
    link: "https://github.com/webpack/webpack",
    iconSrc: "https://api.iconify.design/devicon:webpack.svg",
  },
  {
    title: "Docker",
    description:
      "Docker 是一个开源的容器化平台，用于打包、分发和运行应用程序，它通过将应用及其依赖封装在轻量级的容器中，实现“一次构建，到处运行”，极大提升了环境一致性、部署效率和系统隔离性，广泛应用于微服务架构、CI/CD 流水线和云原生开发中。",
    link: "https://www.docker.com/",
    iconSrc: "https://api.iconify.design/skill-icons:docker.svg",
  },
  {
    title: "Sass",
    description:
      "Sass（Syntactically Awesome Stylesheets）是一个 CSS 预处理器，它扩展了 CSS 的功能，让编写样式更高效、更易维护。",
    link: "https://www.sass.hk/",
    iconSrc: "https://api.iconify.design/logos:node-sass.svg",
  },
  {
    title: "Pnpm",
    description:
      "pnpm（performant npm）是一个快速、节省磁盘空间的 JavaScript 包管理器，旨在解决 npm 和 Yarn 在性能和磁盘使用方面的痛点。",
    link: "https://pnpm.io/",
    iconSrc: "https://api.iconify.design/logos:pnpm.svg",
  },
  {
    title: "Git",
    description:
      "Git 是一个分布式版本控制系统，用于跟踪文件变更，协调多人协作开发。最初由 Linus Torvalds 为 Linux 内核开发而创建。",
    link: "https://git-scm.com/",
    iconSrc: "https://api.iconify.design/logos:git-icon.svg",
  },
  {
    title: "VS Code",
    description:
      "VS Code（Visual Studio Code）是微软开发的免费、开源的轻量级代码编辑器，支持多种编程语言，具有丰富的扩展生态系统。",
    link: "https://code.visualstudio.com/",
    iconSrc: "https://api.iconify.design/logos:visual-studio-code.svg",
  },
  {
    title: "MySQL",
    description:
      "MySQL 是一个开源的关系型数据库管理系统（RDBMS），使用 SQL（Structured Query Language）进行数据管理，属于 Oracle 公司旗下产品。",
    link: "https://www.mysql.com/",
    iconSrc: "https://api.iconify.design/devicon:mysql.svg",
  },
];
export default function Stack() {
  return (
    <main className="flex h-screen w-full box-border flex-col overflow-y-auto py-8 px-8">
      <h1 className="text-3xl font-bold mb-6">技术栈</h1>
      <div className="mb-4 last:mb-0">
        这里是我的常用栈，我使用这些工具来构建和维护我的项目。
      </div>
      <ul className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {stackList.map((stackItem) => (
          <li key={stackItem.title} className="mb-1 flex last:mb-0">
            <Card className="flex-1 max-w-96 cursor-pointer">
              <div className="flex items-center h-full space-x-4 rounded-md p-4">
                <Image
                  src={stackItem.iconSrc}
                  width={24}
                  height={24}
                  alt={stackItem.title}
                ></Image>
                <div className="flex-1 space-y-1">
                  <a
                    className="text-sm font-medium leading-none flex hover:underline items-center"
                    href={stackItem.link}
                    target="_blank"
                  >
                    {stackItem.title}
                    <Link className="ml-1" size={14} />
                  </a>
                  <p className="text-sm text-muted-foreground">
                    {truncateText(stackItem.description)}
                  </p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
