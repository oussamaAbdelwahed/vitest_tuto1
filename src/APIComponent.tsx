import { useEffect, useState } from "react";
import fetch from "node-fetch";

const APIComponent = () => {
  const [data, setData] = useState<{ name: string }>();
  useEffect(() => {
    let isMounted = true;
    fetch("http://localhost/api")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setData(data);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>{data && <div role={"contentinfo"}>Name is {data.name}</div>}</div>
  );
};

export default APIComponent;
