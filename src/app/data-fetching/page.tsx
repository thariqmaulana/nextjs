// "use client"
import Link from "next/link";
import React from "react";

interface Product {
  data: [
    {
      id: number;
      name: string;
      imageUrl: string;
    }
  ];
}
async function getData() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
  console.log('render');
  const response = await fetch("http://localhost:3000/api/productas", {
    cache: "no-cache",
    // next: {
    //   // revalidate: 10
    //   // cara kedua. on demand : manual
    //   tags: ["products"], // jadi endpoint ini dikasih tags. nah kalau ada trigger revalidate['products.] maka data product akan dihapus dari cache dan fetch ulang. bisa kombinasi dengan timer untuk automatis
    // },
  });
  console.log(response);

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  return response.json();
}

async function DataFetching() {
  
  const products: Product = await getData();
  console.log(products);
  const data = products.data;

  async function handleRevalidate() {
    await fetch('http://localhost:3000/api/revalidate');
    console.log('clicked');
    
  }

  
  

  return (
    <div>
      {/* <button className="p-2 bg-red-400 text-white cursor-pointer">Revalidate</button>  */}
      <div>
        {data.length > 0 &&
        data.map((product) => (
          <div key={product.id}>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <img width={200} height={200} src={product.imageUrl} alt="---" />
            <a href={product.imageUrl}>GOOO</a>
          </div>
        ))}
        <Link href="/data-fetching/revalidate">Revalidate</Link>
      </div>
    </div>
  );
}

export default DataFetching;
