import Image from "next/image";
import React from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  bgColor: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1">
      {links?.map((link, index) => (
        <React.Fragment key={link.name}>
          <a
            href={link.url}
            className="flex items-center gap-1 px-2 py-1 rounded text-gray-600 hover:text-gray-900"
            style={{ backgroundColor: link.bgColor }}
          >
            <div className="relative w-4 h-4 rounded overflow-hidden flex items-center justify-center">
              <Image
                src={link.icon}
                alt={link.name}
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
            {link.name}
          </a>
          {index !== links.length - 1 && (
            <span className="text-gray-300 flex items-center">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
