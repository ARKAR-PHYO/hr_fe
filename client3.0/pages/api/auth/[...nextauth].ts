import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import apiCall from "../../../utils/apiCall";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      async authorize(credentials, req) {
        //   if(!credentials?.email || !credentials.password) throw new Error("Invalid Credentials")
        const payload = {
          email: credentials?.email,
          password: credentials?.password,
        };
        try {
          const result = await apiCall.post("/user/login", payload);
          const userData = result.data;
          console.log("userData", userData);
        } catch (error) {}
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/signin",
  },
});
