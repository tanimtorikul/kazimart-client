import { useEffect, useState } from "react";

const useProducts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  console.log(items);
  return [items, loading];
};

export default useProducts;
