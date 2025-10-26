"use client"
import React, { useState } from "react";

export default function Template({children} : {children : React.ReactNode} ) {
  const [state, setstate] = useState(0);
  return (
    <div>
      <h1>Hello Template</h1>
      <button className="p-2 bg-blue-500 text-white" onClick={() => setstate(state + 1)}>Klik {state}</button>
      {children}
    </div>
  )
}