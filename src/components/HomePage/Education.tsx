"use client";

// import { useSiteStore } from "@/store/site";

interface Education {
  school: string;
  major: string;
  degree: string;
  startDate: string;
  endDate: string;
  certifications?: string[];
}

export const Education = () => {
  //   const { site } = useSiteStore();

  return (
    <div className="space-y-4">
      <div className="group flex items-center space-x-2 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
        <div className="flex-1">
          <p className="text-gray-600 flex items-center flex-wrap gap-2">
            <span>{"郑州升达经贸管理学院"}</span>
            <span className="text-gray-300">|</span>
            <span>{"通信工程"}</span>
            <span className="text-gray-300">|</span>
            <span>{"本科"}</span>
          </p>
        </div>
        <div className="text-gray-600 text-sm whitespace-nowrap">
          {new Date(2013, 9, 5).getFullYear()} -{" "}
          {new Date(2017, 6, 1).getFullYear()}
        </div>
      </div>
    </div>
  );
};
