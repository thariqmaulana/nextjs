import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    name: 'Bunga',
    imageUrl: 'https://images.pexels.com/photos/4038964/pexels-photo-4038964.jpeg'
  },
  {
    id: 2,
    name: 'Camera',
    imageUrl: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg'
  },
  {
    id: 3,
    name: 'Tas',
    imageUrl: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg'
  },
  {
    id: 4,
    name: 'Tas',
    imageUrl: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg'
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