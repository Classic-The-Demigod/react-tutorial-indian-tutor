import React, { useMemo, useState } from "react";
import useFetch from "./UseFetch";

function MemoExample() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const [flag, setFlag] = useState(false);
  function filterProductByprice(getProducts) {
    console.log("this function is getting rendered");
    return getProducts?.length > 0
      ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
      : [];
  }

  const memorizedVersion = useMemo(
    () => filterProductByprice(data?.products),
    [data?.products]
  );
  if (loading) return <h1>Loading Data, Please Wait.....</h1>;
  console.log(data);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: flag ? "red" : "black" }}>Use Memo</h1>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
      {memorizedVersion.map((item) => (
        <ul>
          <li>{item?.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default MemoExample;
