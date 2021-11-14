import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"


export default NextAuth({

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

  ],
  pages: {
    signIn: '/login',

  },

  callbacks: {
    
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('account')
      console.log(account);
      return token
    }
  }


})