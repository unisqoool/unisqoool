import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      const path = req.nextUrl.pathname;
      return path.startsWith("/dashboard");
    },
  },
});

export const config = { matcher: ["/dashboard", "/dashboard/:path*"] };
