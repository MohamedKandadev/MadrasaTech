export  { default } from "next-auth/middleware"
// import { NextResponse } from "next/server"

// export default withAuth(
//     function middleware(req) {
//       const token = req.nextauth.token
//       const path = req.nextUrl.pathname
  
//       // Check if we're in the dashboard route group
//       if (path.includes('/(dashboard)')) {
//         // No token means not authenticated
//         if (!token) {
//           return NextResponse.redirect(new URL("/auth/sign-in", req.url))
//         }
  
//         // Define route access based on roles
//         // const routeAccess = {
//         //   // Admin routes
//         //   "/charts": ["SUPER_ADMIN", "ADMIN_APP"],
//         //   "/tables": ["SUPER_ADMIN", "ADMIN_APP", "ADMIN_SCHOOL"],
//         //   "/forms": ["SUPER_ADMIN", "ADMIN_APP", "ADMIN_SCHOOL"],
//         //   "/calendar": ["SUPER_ADMIN", "ADMIN_APP", "ADMIN_SCHOOL", "TEACHER"],
//         //   // Profile is accessible to all authenticated users
//         //   "/profile": ["SUPER_ADMIN", "ADMIN_APP", "ADMIN_SCHOOL", "TEACHER", "EMPLOYEE", "STUDENT", "PARENT"]
//         // }
  
//         // Check if current path requires specific role access
//         // for (const [route, allowedRoles] of Object.entries(routeAccess)) {
//         //   if (path.includes(route) && !allowedRoles.includes(token.role)) {
//         //     return NextResponse.redirect(new URL("/auth/unauthorized", req.url))
//         //   }
//         // }
//       }
  
//       return NextResponse.next()
//     },
//     {
//       callbacks: {
//         authorized: ({ token }) => !!token
//       },
//     }
//   )


export const config = {matcher:["/","/(dashboard)/:path*", "/app/:path*"]}