import { NextRequest, NextResponse } from 'next/server';

// Array of routes that do not require authorization
const allowedRoutes = ['/api/email/enquire'];

interface AuthorizationOptions {
  status: number;
}

export function middleware(req: NextRequest): NextResponse {
  const { pathname }: { pathname: string } = req.nextUrl;

  // Check if the current route is in the allowedRoutes array
  if (allowedRoutes.includes(pathname)) {
    return NextResponse.next(); // Skip authorization for allowed routes
  }

  // Perform authorization check for other routes
  const authorizationHeader: string | null = req.headers.get('Authorization');
  const apiKey: string | undefined = authorizationHeader?.split('Bearer ')[1];

  // Check if API key exists and matches the environment variable
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return new NextResponse('Unauthorized', {
      status: 401
    } as AuthorizationOptions);
  }

  // If the API key is valid, continue to the next handler
  return NextResponse.next();
}

// Optional: Specify the paths the middleware should apply to
export const config = {
  matcher: ['/api/:path*'] // Apply middleware to all /api routes
};
