import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = false;
  // request.nextUrl.pathname.startsWith('/about/profile'
  if (!isLogin) {
    return NextResponse.redirect(new URL('/login', request.url
      // rewrite. /aboutnya componentnya di rewritre punya /
    ));
  }

}

export const config = {
  //middleware ini akan dijalankan di routes ini
  matcher: ['/about/:path*']
}