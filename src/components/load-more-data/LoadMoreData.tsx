import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[] | string;
};

type ProductsType = ProductType[];

const LoadMoreData = () => {
  const [products, setProducts] = useState<null | ProductsType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState(2);

  const getProducts = async (limit: number) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(limit).then((data) => {
      setIsLoading(false);
      setProducts(data.products);
    });
  }, []);

  const loadMore = () => {
    setLimit(limit + 2)
  }

  useEffect(() => {
    getProducts(limit)
        .then(data => {
            setIsLoading(false);
            if(!products) return;
            const newProducts = data.products;
            setProducts(newProducts);
        })
  }, [limit])


  return (
    <div className="flex flex-col items-center py-20">
      <div className="grid grid-cols-4">
        {products?.map((product) => (
          <div key={product.images[0]}>
            <img src={product.images[0]} alt={product.title} />
          </div>
        ))}
      </div>
      <button onClick={loadMore}>{isLoading ? "Loading..." : "Load More"}</button>
    </div>
  );
};
export default LoadMoreData;
