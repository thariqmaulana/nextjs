import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    name: 'baju'
  },
  {
    id: 2,
    name: 'sepatu'
  },
  {
    id: 3,
    name: 'tas'
  },
];

export async function GET(request: NextRequest) {
  // request.url = http://localhost:3000/api/product/123
  // auto convert oleh javascript. dipecah-pecah
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  console.log('query paramnya adalah ' + url.searchParams.entries());


  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id))
    if (detailProduct) {
      return NextResponse.json({ status: 200, data: detailProduct });
    }
    return NextResponse.json({ status: 404, message: 'Not Found' });
  }
  return NextResponse.json({ status: 200, data });
}