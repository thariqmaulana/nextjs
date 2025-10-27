"use client"

import Link from "next/link"

export default function ProductError({error, reset}: {error: Error, reset: () => void}) {
  return (
    <div>
      <h1 className="text-3xl">Error fetching data</h1>
      <Link href="/">Home</Link>
      <button onClick={() => reset()}>Retry</button>
    </div>
  )
}