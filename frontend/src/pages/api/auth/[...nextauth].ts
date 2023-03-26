import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.ff80ee11b1d8376e0bda165576ff6b53!,
      clientSecret: process.env.y52vdUOfKRhLndnU9hiDR4GljGCuz5Je!,
    }),
  ],
})