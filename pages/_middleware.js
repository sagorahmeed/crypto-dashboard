import { NextResponse } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/') {

        const url = req.nextUrl.clone()
        url.pathname = '/dashboard'
        return NextResponse.rewrite(url)
    }
    return NextResponse.next()
}