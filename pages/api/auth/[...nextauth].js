import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
let GOOGLE_CLIENT_ID="438141259512-2r6noo250bk3sart7ra0apegvb08n9hv.apps.googleusercontent.com"
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
