//import NextAuth from "next-auth/react";
import GithubProvider from "next-auth/providers/github";

GithubProvider({
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  authorization: {
    params: {
      scope: 'read:user',
    },
  },
})
