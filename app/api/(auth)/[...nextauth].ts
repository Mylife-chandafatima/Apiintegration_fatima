import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../utils/auth"; // Utility to verify password

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await getUserByEmail(credentials.email); // Fetch user from DB
        if (user && verifyPassword(credentials.password, user.password)) {
          return { email: user.email, role: user.role }; // Include role in session
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt", // Using JWT for session storage
  },
});
