import { NextRequest, NextResponse } from "next/server";
import { api } from "./features/shared";

export default async function middleware(req: NextRequest) {
    // const { pathname } = req.nextUrl;
    // const protectedRoutes = [
    //     '/dashboard'
    // ];

    // const publicRoutes = [
    //     '/',
    //     '/login',
    //     '/register',
    //     '/changelog'
    // ];

    // if (
    //     pathname.startsWith('/_next/') ||
    //     pathname.startsWith('/api/auth/') ||
    //     pathname.includes('.')
    // ) {
    //     return NextResponse.next();
    // }

    // const isPublic = publicRoutes.some(prefix => {
    //     if (prefix === '/') {
    //         return pathname === '/';
    //     }
    //     return pathname.startsWith(prefix);
    // });

    // if (isPublic) {
    //     return NextResponse.next();
    // }

    // const isProtected = protectedRoutes.some(prefix =>
    //     pathname.startsWith(prefix)
    // );

    // if (isProtected) {
    //     try {
    //         const token = req.cookies.get('token');

    //         if (!token) {
    //             const loginUrl = new URL('/login', req.url);
    //             loginUrl.searchParams.set('redirect', pathname);
    //             return NextResponse.redirect(loginUrl);
    //         }

    //         const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

    //         const verifyResponse = await api.post('/api/auth/verify');

    //         if (!verifyResponse.data) {
    //             const response = NextResponse.redirect(new URL('/login', req.url));
    //             response.cookies.delete('token');
    //             return response;
    //         }
            
    //         return NextResponse.next();
    //     } catch (error) {
    //         console.error('Auth middleware error:', error);
    //         const response = NextResponse.redirect(new URL('/login', req.url));
    //         response.cookies.delete('token');
    //         return response;
    //     }
    // }

    return NextResponse.next();
}