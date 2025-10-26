import React from "react";

async function ProductDetail(props: { params: { slug?: string[] } }) {
  const { slug } = await props.params;
  console.log(slug);
  

  return (
    <div>
      {slug ? 'Product Detail' : 'Product Page'}
    </div>
  )
}

export default ProductDetail;
