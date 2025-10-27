import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag('products', 'max')

  return NextResponse.json({message: 'ok'});
} 