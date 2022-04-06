import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
let GOOGLE_CLIENT_ID="438141259512-dpd326fj1g1t1u0a99srhg7e9mddb05f.apps.googleusercontent.com"
let GOOGLE_CLIENT_SECRET="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"

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
