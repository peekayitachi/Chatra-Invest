import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to the custom login page
    error: "/auth/error", // Optional: Custom error page
    signOut: "/", // Optional: Redirect after sign-out
  },
  // ...existing code for callbacks, session, etc., if needed...
});
