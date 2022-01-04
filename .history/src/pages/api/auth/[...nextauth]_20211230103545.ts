import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user',
    }),
  ],
})