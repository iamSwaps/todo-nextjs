import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
let GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID
let GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET



const options = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET
}

export default (req, res) => NextAuth(req, res, options)
