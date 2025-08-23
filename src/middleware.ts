import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple authentication check - in production, use JWT or session-based auth
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'atlas-admin-2024'

export function middleware(request: NextRequest) {
  // Check if the request is for admin pages
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Get auth token from cookie or header
    const authToken = request.cookies.get('admin-auth')?.value || 
                     request.headers.get('x-admin-auth')

    // Check if token is valid
    if (authToken !== ADMIN_TOKEN) {
      // Redirect to login page
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}
