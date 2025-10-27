"use client"
import Link from "next/link";
import React from "react";
 function Revalidate() {
  

  async function handleRevalidate() {
    await fetch("/api/revalidate");
    console.log('clicked');
    
  }

  return (
    <div>
      <button className="p-2 bg-red-400 text-white cursor-pointer" onClick={handleRevalidate}>Revalidate</button> 
    <Link href="/data-fetching">back</Link>
    </div>
  );
}

export default Revalidate;
