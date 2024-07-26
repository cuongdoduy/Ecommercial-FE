import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  console.log(req.cookies)
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if ((req.nextUrl.pathname.startsWith('/auth/login')|| req.nextUrl.pathname.startsWith("/auth/sign-up")) && isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (req.nextUrl.pathname.startsWith("/auth/sign-up") && !isAuthenticated) {
    const checkCallBackUrl = req.nextUrl.searchParams.get("callbackUrl");
    if (!checkCallBackUrl) {
      const url = new URL("/auth/sign-up", req.url);
      const newCallBackUrl = '/'
      url.searchParams.set("callbackUrl", newCallBackUrl);
      return NextResponse.redirect(url);
    }
    else return NextResponse.next();
  }

  const authMiddleware = await withAuth({
    pages: {
      signIn: `/auth/login`,
    },
    
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}

export const config = {
  matcher: ["/auth/login","/auth/sign-up","/profile"]
};