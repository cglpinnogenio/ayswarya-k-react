import React, { useEffect, useState } from "react";
import "./ProductItem.css";
import  Product  from "../../Components/ProductCard/Product";

const ProductItem = () => {
  const [isSelect, setIsSelect] = useState(0);
  const handleClick = (index: number) => {
    setIsSelect(index);
  };
  const [users, setUsers] = useState<any>([]);
  const fetchData = async () => {
    const productdetails = await fetch(
      "https://71dd661b-ec62-4d5a-84ab-bd1f9334308a.mock.pstmn.io/users"
    );
    const json = await productdetails.json();
    setUsers([...json]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [name, setName] = useState("Enjoy");
  return (
    <div className="third-container">
      <div className="header-paragraph">{name} our feature products</div>
      <button onClick={() => setName("")}>Reset</button>
      <div className="product-label">
        {users &&
          users.length &&
          users.map((value: any, index: number) => {
            return (
              <Product
                key={`${value.product_name} ${index}`}
                click={() => handleClick(index)}
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
