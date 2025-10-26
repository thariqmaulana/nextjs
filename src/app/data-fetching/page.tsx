import React from "react";
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');

  if (response.status !== 200) {
    throw new Error("Error fetching data");
  }

  return response.json();
}

async function DataFetching() {
  const product = await getData();
  console.log(product);

  return (
    <div>
      {product && (
        <div>
          <p>{product.id}</p>
          <p>{product.completed.toString()}</p>
          <p>{product.title}</p>
          <p>{product.userId}</p>
        </div>
      )}
    </div>
  );
}

export default DataFetching;
