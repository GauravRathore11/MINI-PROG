import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"
 
export function middleware(req: NextRequest) {
 
  const token = req.cookies.get("token")?.value
  const path = req.nextUrl.pathname
 
  // allow login page without token
  if (path === "/login") {
    return NextResponse.next()
  }
 
  // if no token redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }
 
  try {
    const decoded:any = jwt.verify(token, process.env.JWT_SECRET!)
 
    if(decoded.role === 1){ // ADMIN
      if(path === "/login"){
        return NextResponse.redirect(new URL("/dashboard", req.url))
      }
    }
 
    if(decoded.role === 4){ // EMPLOYEE
      if(path === "/login"){
        return NextResponse.redirect(new URL("/tickets", req.url))
      }
    }
 
  } catch {
    return NextResponse.redirect(new URL("/login", req.url))
  }
 
  return NextResponse.next()
}