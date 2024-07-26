import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        const email = credentials && credentials.email;
        const password = credentials && credentials.password;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await res.json();

        if (data.success === true) {
          return data.data;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
      credentials: {
        email: { label: "email", type: "text " },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && account.provider === "credentials") {
        const accessToken = user.accessToken;

        token = Object.assign({}, token, {
          accessToken: accessToken,
        });
      }

      return token;
    },
    session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          id_token: token.id_token,
        });
        session = Object.assign({}, session, {
          accessToken: token.accessToken,
        });

        session = Object.assign({}, session, {
          error: token.error,
        });
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
