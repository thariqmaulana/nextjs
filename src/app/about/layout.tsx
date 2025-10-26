import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed top-10 right-0 z-10 h-screen w-60 bg-gray-700">
        <div className="text-white p-5 text-right">Sidebar</div>
      </nav>
      <div>{children}</div>
    </>
  );
}
