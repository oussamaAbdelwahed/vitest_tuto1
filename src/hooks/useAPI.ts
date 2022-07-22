import { useEffect, useState } from "react";
import fetch from "node-fetch";

const useAPI = () => {
  const [data, setData] = useState<{ name: string }>();
  useEffect(() => {
    let isMounted = true;
    fetch("http://localhost/apii")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setData(data);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
};

export default useAPI;
