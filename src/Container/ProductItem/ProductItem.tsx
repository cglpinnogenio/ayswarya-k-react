import React, { useEffect, useState } from "react";
import "./ProductItem.css";
import Product from "../../Components/ProductCard/Product";

const ProductItem = () => {
  const [isSelect, setIsSelect] = useState(0);
  const handleClick = (index: number) => {
    setIsSelect(index);
  };
  const [users, setUsers] = useState<any>([]);
  const fetchData = async () => {
    const productDetails = await fetch(
      "https://cd67de03-4b00-41f4-b729-b1fe00335364.mock.pstmn.io/users"
    );
    const json = await productDetails.json();
    setUsers([...json]);
  };
  const [products, setProducts] = useState<any>([]);
  const fetchdetails = async () => {
    const productarray = await fetch(
      "https://08b1fc01-1bea-4483-b679-c3724a35d1e4.mock.pstmn.io/user2"
    );
    const json = await productarray.json();
    setProducts([...json]);
  };
  const dataFetch = () => {
    {
      if (isSelect === 2) {
        fetchdetails();
      } else {
        fetchData();
      }
    }
  };
  useEffect(() => {
    dataFetch();
  }, [isSelect]);

  const [name, setName] = useState("Enjoy");
  const nameChangeHandler = () => {
    setName(name === "Enjoy" ? "" : "Enjoy");
  };

  return (
    <div className="third-container">
      <div className="header-paragraph">{name} our feature products</div>
      <button onClick={() => nameChangeHandler()}>Reset</button>
      <div className="product-label">
        {isSelect === 2
          ? products &&
            products.length &&
            products.map((value: any, index: number) => {
              return (
                <Product
                  key={`${value.product_name} ${index}`}
                  click={() => handleClick(index)}
                  select={index === isSelect}
                  image={value.url}
                  title={value.product_name}
                  price={value.product_price}
                />
              );
            })
          : users &&
            users.length &&
            users.map((value: any, index: number) => {
              return (
                <Product
                  key={`${value.product_name} ${index}`}
                  click={() => handleClick(index)}
                  select={index === isSelect}
                  image={value.url}
                  title={value.product_name}
                  price={value.product_price}
                />
              );
            })}
      </div>
      <div className="shop-all">SHOP ALL</div>
    </div>
  );
};
export default ProductItem;
