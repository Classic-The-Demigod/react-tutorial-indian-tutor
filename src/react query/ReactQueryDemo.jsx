import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addNewProduct, fetchListOfProducts } from "./api";

function ReactQueryDemo() {
    const [productTitle, setProductTitle] = useState("");
    const getQueryClient = useQueryClient()

  const { data: productList, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchListOfProducts(),
  });

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
      mutationFn: addNewProduct,
      onSuccess: () => {
          getQueryClient.invalidateQueries(["product-list"])
      }
  });

  async function handleAddNewProduct() {
    await handleAddNewProductMutation(productTitle);
    setProductTitle("");
  }

  if (isLoading) return <h1>Loading products! Please Wait</h1>;
  //   console.log(query);
  return (
    <div>
      <h1>React Query Demo</h1>
      <div>
        <input
          type="text"
          name="product"
          placeholder="Enter product title"
          id=""
          value={productTitle}
          onChange={(event) => setProductTitle(event.target.value)}
        />
        <button
          onClick={handleAddNewProduct}
          disabled={productTitle.trim() === ""}
          type="button"
        >
          Add New Product
        </button>
      </div>
      <ul>
        {productList?.length > 0 ? (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h3>No Product Found</h3>
        )}
      </ul>
    </div>
  );
}

export default ReactQueryDemo;
