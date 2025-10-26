"use client"
import React, { useState } from "react";

interface Product {
  id: number,
  name: string
}

 function ProductDetail(props: { params: { slug?: string[] } }) {
  const { slug } =  props.params;
  const [product, setProduct] = useState<Product[]>([]);
  console.log(slug);
  console.log(product);
  
  
  const handleClick = async () => {
    const response = await fetch('/api/product', {
      method: 'GET'
    })
    const data = await response.json();

    setProduct(data.data);
  }

  return (
    <div>
      {slug ? 'Product Detail' : 'Product Page'}
      <button className="bg-red-800 p-2 text-white" onClick={handleClick}>Get Product</button>
      <div>
        {product.map(item => (
          <div key={item.id}>
            <p>{item.id} : {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDetail;
