import React from "react";
type Props = {
  items: Array<{ name: string; href: string }>;
};
export const Sidebar: React.FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map(({ href, name }) => {
        return (
          <a role={"navigation"} key={href} href={href}>
            {name}
          </a>
        );
      })}
    </div>
  );
};
