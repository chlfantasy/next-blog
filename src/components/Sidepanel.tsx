"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Flower,
  FolderHeart,
  Forward,
  Github,
  Home,
  PencilLine,
  Shell,
  Slack,
  SquareDashedBottomCode,
  Terminal,
  TrafficCone,
  Twitter,
  UnfoldVertical,
  Video,
  Lightbulb,
  Camera,
  Laptop,
  Folder,
  Blocks,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
const navList = [
  {
    title: "首页&简介",
    href: "/",
    prefix: <Home size={16} />,
  },
  { title: "技术栈", href: "/stack", prefix: <Slack size={16} /> },
  { title: "技术文章", href: "/writing", prefix: <PencilLine size={16} /> },
  {
    title: "灵感笔记",
    href: "/inspirations",
    prefix: <Lightbulb size={16} />,
  },
  { title: "生活相册", href: "/album", prefix: <Camera size={16} /> },
  // { title: "Lify", href: "/lify", prefix: <Shell size={16} /> },
  { title: "项目", href: "/projects", prefix: <Folder size={16} /> },
  { title: "demo", href: "/demos", prefix: <Blocks size={16} /> },
  { title: "工作空间", href: "/workspace", prefix: <Laptop size={16} /> },
  // { title: "Bookmarks", href: "/bookmarks", prefix: <FolderHeart size={16} /> },
  { title: "Playground", href: "/playground", prefix: <Slack size={16} /> },
];

const socialList = [
  {
    title: "GitHub",
    href: "https://github.com/chlfantasy",
    prefix: <Github size={16} />,
  },
  {
    title: "Bilibili",
    href: "https://space.bilibili.com/249899429",
    prefix: <Flower size={16} />,
  },
];

const openSourceList = [
  {
    title: "V2G",
    href: "https://vtog.vesper.host",
    prefix: <Video size={16} />,
  },
  {
    title: "BeautyCode",
    href: "https://marketplace.visualstudio.com/items?itemName=Vesper.beautycode",
    prefix: <SquareDashedBottomCode size={16} />,
  },
  {
    title: "Vtabs",
    href: "https://chromewebstore.google.com/detail/vtabs/ldjlkpemhoddnoedhbebgdncegooejim?hl=zh-CN&utm_source=ext_sidebar",
    prefix: <UnfoldVertical size={16} />,
  },
  {
    title: "Bup",
    href: "https://www.npmjs.com/package/buildp",
    prefix: <Terminal size={16} />,
  },
];

const SidebarContent = ({ onNavClick }: { onNavClick?: () => void }) => {
  const currentPathname = usePathname();
  return (
    //
    <div className="flex h-full w-full flex-col p-3">
      <div className="mb-4 p-2 flex flex-row flex-nowrap gap-2">
        <Avatar>
          <AvatarImage src="/jay.webp" alt="vespser" />
          <AvatarFallback>CHL</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-semibold tracking-tight">CHL</h1>
          <p className="text-gray-600">Front-End Engineer</p>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {navList.map((navItem, index) => {
          const isSelected =
            currentPathname.split("/")[1] === navItem.href.replace("/", "");
          const commonClasses =
            "group flex items-center justify-between rounded-lg p-2";
          const selectedClasses = isSelected
            ? "bg-black text-white"
            : "hover:bg-gray-200";
          const borderClasses = isSelected
            ? "border-gray-600 bg-gray-700 text-gray-200 group-hover:border-gray-600"
            : "border-gray-200 bg-gray-100 text-gray-500 group-hover:border-gray-300";
          return (
            <Link
              key={navItem.href}
              href={navItem.href}
              onClick={onNavClick}
              className={`${commonClasses} ${selectedClasses}`}
            >
              <span className="flex items-center">
                {navItem.prefix}
                <span className="ml-2 font-medium">{navItem.title}</span>
              </span>
              <span
                className={`hidden h-5 w-5 place-content-center rounded border text-xs font-medium transition-colors duration-200 lg:grid ${borderClasses}`}
              >
                {index + 1}
              </span>
            </Link>
          );
        })}
      </nav>
      <Separator className="my-5" />
      <span className="px-2 text-xs mb-2 font-medium leading-relaxed text-gray-600">
        Online
      </span>
      <nav className="flex flex-col gap-1">
        {socialList.map((socialItem, index) => (
          <Link
            key={socialItem.href}
            href={socialItem.href}
            target="_blank"
            className="group flex items-center justify-between rounded-lg p-2"
          >
            <span className="flex items-center">
              {socialItem.prefix}
              <span className="ml-2 font-medium">{socialItem.title}</span>
            </span>
            <Forward size={16} />
          </Link>
        ))}
      </nav>
      <Separator className="my-5" />
      {/* <span className="px-2 text-xs mb-2 font-medium leading-relaxed text-gray-600">
        Open Source
      </span> */}
      {/* <nav className="flex flex-col gap-1">
        {openSourceList.map((openItem, index) => (
          <Link
            key={openItem.href}
            href={openItem.href}
            target="_blank"
            className="group flex items-center justify-between rounded-lg p-2"
          >
            <span className="flex items-center">
              {openItem.prefix}
              <span className="ml-2 font-medium">{openItem.title}</span>
            </span>
            <Forward size={16} />
          </Link>
        ))}
      </nav> */}
    </div>
  );
};
export default function Sidepanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [startY, setStartY] = useState(0);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!drawerRef.current) return;

    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 0) {
      // Only allow downward swipe
      drawerRef.current.style.transform = `translateY(${deltaY}px)`;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!drawerRef.current) return;

    const currentY = e.changedTouches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 50) {
      // If swiped down more than 50px, close the drawer
      setIsOpen(false);
    }
    drawerRef.current.style.transform = "";
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* Mobile Navigation Button */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-colors hover:bg-gray-800"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transform transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        />

        {/* Drawer Panel */}
        <div
          ref={drawerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`absolute bottom-0 left-0 right-0 h-[65vh] transform rounded-t-[20px] bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="relative flex h-5 items-center justify-between border-b px-4">
            <div className="absolute left-1/2 top-1/2 h-1 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300" />
            <div className="flex-1" />
          </div>

          {/* Drawer Content */}
          <div className="h-[calc(70vh-3.5rem)] overflow-y-auto overscroll-contain">
            <SidebarContent onNavClick={handleClose} />
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="min-w-60 relative hidden h-screen w-60 flex-col border-r bg-zinc-50 lg:flex xl:w-72">
        <div className="overflow-y-auto scrollbar-hidden p-3 h-full">
          <SidebarContent />
        </div>
      </aside>
    </>
  );
}
