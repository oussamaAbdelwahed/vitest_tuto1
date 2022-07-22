import React from "react";
type Props = {
  name: string;
};
export const Person: React.FC<Props> = ({ name }) => {
  return <div role={"contentinfo"}>Name is {name}</div>;
};
