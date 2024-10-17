import { useEffect, useState } from "react";

const useProducts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://kazimart-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  // console.log(items);
  return [items, loading];
};

export default useProducts;
