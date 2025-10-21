import { getDocsList } from "@/components/Markdown";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/HomePage/Section";
import { SocialLinks } from "@/components/HomePage/SocialLinks";
import { WorkExperience } from "@/components/HomePage/WorkExperience";
import { Education } from "@/components/HomePage/Education";
// import { WebRunInfo } from '@/components/HomePage/WebRunInfo'
import { WebControlInfo } from "@/components/HomePage/WebControlInfo";
const socialLinks = [
  {
    bgColor: "#f5e6e6",
    icon: "http://next-blog.oss-cn-beijing.aliyuncs.com/images/album/09a94549-7836-42ea-bc6d-d5f456509079.png",
    name: "Github",
    url: "https://github.com/chlfantasy",
  },
  {
    bgColor: "#f0fff5",
    icon: "http://next-blog.oss-cn-beijing.aliyuncs.com/images/album/f4ac347f-d3ef-4090-a865-77cef74dc50d.png",
    name: "bilibili",
    url: "https://space.bilibili.com/249899429",
  },
  {
    bgColor: "#dedcf9",
    icon: "https://next-blog.oss-cn-beijing.aliyuncs.com/images/articles/9c652f02-6e4f-44c1-a472-b0374df3000a.png",
    name: "bug & 建议",
    url: "https://tally.so/r/mKWXzg",
  },
];

const workExperiences = [
  {
    _id: "67adf447d63c7f025d783b83",
    company: "江苏润和软件股份有限公司",
    companyUrl: "https://www.hoperun.com/",
    description:
      "19年入职至今，期间参与多个大型项目开发，积累了丰富的前端开发经验，熟悉主流前端技术栈，具备良好的代码编写规范和团队协作能力。",
    endDate: "至今",
    position: "前端工程师",
    startDate: "2019-10-08",
  },
  {
    _id: "67adf447d63c7f025d783b82",
    company: "上海荟乐奇教育科技有限公司",
    companyUrl: "",
    description:
      "负责公司App上h5与小程序的前端开发，优化用户体验，提升页面性能，确保跨浏览器兼容性。",
    endDate: "2019-09-30",
    position: "前端工程师",
    startDate: "2018-05-17",
  },
  {
    _id: "67adf447d63c7f025d783b81",
    company: "上海韵达信息技术有限公司",
    companyUrl: "https://www.dongputech.com/",
    description: "负责公司内部管理系统的前端开发工作，协助设计并实现用户界面。",
    endDate: "2018-05-10",
    position: "前端实习生",
    startDate: "2017-07-01",
  },
];
export default function Index() {
  const docsList = getDocsList();
  return (
    <main className="flex h-screen w-full box-border flex-col overflow-y-auto py-8 px-8">
      <div className="relative w-full">
        {/* Background Image */}
        <div className="w-[80%] h-[25vh] rounded-xl overflow-hidden relative mx-auto">
          <Image
            src={"/images/background.jpg"}
            alt="Background"
            fill
            className="object-cover object-[center_12%]"
            priority
          />
        </div>

        {/* Avatar */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-16">
          <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={"/jay.webp"}
                alt="Avatar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl my-0 mx-auto mt-24">
        <p className="text-gray-600 mt-4">
          你好 👋，我是{" "}
          <span className="bg-[#e8f5e9] px-2 py-0.5 rounded">{"CHL"}</span>，
          {
            "一个热爱生活和分享技术的前端工程师,我希望能够通过我的博客，与大家分享我的生活态度、记录经历和技术的学习，希望带给大家一些启发和帮助！"
          }
        </p>
        {/* 其他信息 */}
        <div className="max-w-2xl">
          <Section title="社交账号">
            <SocialLinks links={socialLinks} />
          </Section>

          <Section title="网站信息">
            <WebControlInfo />
          </Section>
          <Section title="教育经历">
            <Education />
          </Section>
          <Section title="工作经历">
            <WorkExperience experiences={workExperiences} />
          </Section>
          {/* <Section title="运行信息">
            <WebRunInfo />
          </Section>
          <Section title="工作经历">
            <WorkExperience
              experiences={workExperiences}
              calculateDuration={calculateDuration}
            />
          </Section> */}
        </div>
      </div>
      <div className="w-full max-w-3xl my-0 mx-auto"></div>
      <div className="w-full max-w-3xl my-0 mx-auto">
        <Link
          className="mb-4 mt-8 font-semibold cursor-pointer text-lg hover:underline text-gray-900 underline-offset-4"
          href="/writing"
        >
          Writing
        </Link>
        <div className="text-sm">
          <div className="grid grid-cols-6 py-2 mt-4 mb-1 font-medium text-gray-500 border-b border-gray-200">
            <span className="col-span-1 text-left md:grid">Year</span>
            <span className="col-span-5 md:col-span-5">
              <span className="grid grid-cols-4 items-center md:grid-cols-8">
                <span className="col-span-1 text-left">Date</span>
                <span className="col-span-3 md:col-span-6">Title</span>
              </span>
            </span>
          </div>
          <div className="grid grid-cols-6 transition-colors text-gray-700 duration-500 hover:text-gray-200">
            {docsList.map((navItem, idx) => {
              const lastModified = navItem.lastModified;
              const isSameYear =
                lastModified.getFullYear() !==
                docsList[idx - 1]?.lastModified.getFullYear();
              return (
                <Link
                  key={navItem.name}
                  href={`/writing/${navItem.name}`}
                  className="col-span-6 md:col-span-6 hover:text-gray-700"
                >
                  <span className="grid grid-cols-6 items-center">
                    <span
                      className={`col-span-1 text-left py-4${
                        !isSameYear ? "" : " border-b border-gray-200"
                      }`}
                    >
                      {isSameYear && lastModified.getFullYear()}
                    </span>
                    <span
                      className={`col-span-5 md:col-span-5 py-4 border-b border-gray-200${
                        idx + 1 === docsList.length ? " border-b-0" : ""
                      }`}
                    >
                      <span className="grid grid-cols-4 items-center md:grid-cols-8">
                        <span className="col-span-1 text-left">
                          {`${lastModified
                            .getDate()
                            .toString()
                            .padStart(2, "0")}/${(lastModified.getMonth() + 1)
                            .toString()
                            .padStart(2, "0")}`}
                        </span>
                        <span className="col-span-2 md:col-span-6">
                          {navItem.name}
                        </span>
                        <span className="col-span-1 flex flex-nowrap">
                          <Star size={16} />
                          <Star size={16} />
                          <Star size={16} />
                          <Star size={16} />
                          <Star size={16} />
                        </span>
                      </span>
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
