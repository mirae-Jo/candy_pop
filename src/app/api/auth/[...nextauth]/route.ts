import type { Adapter } from 'next-auth/adapters';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import { SupabaseAdapter } from '@auth/supabase-adapter';

const EMAIL_SERVER = process.env.EMAIL_SERVER; // process.env.EMAIL_SERVER;
const EMAIL_FROM = 'noreply@candypop.com'; // process.env.EMAIL_FROM;

const handler = NextAuth({
  // secret: process.env.AUTH_SECRET,
  providers: [
    EmailProvider({
      server: EMAIL_SERVER,
      from: EMAIL_FROM,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   console.log(baseUrl);
    //   return baseUrl;
    // },
    async jwt({ token }) {
      console.log('token is : ', token);
      return token;
    },
    async session(args) {
      const { session } = args;
      console.log(args);
      return session;
    },
  },
  debug: true,
  pages: {
    signIn: '/',
  },
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY as string,
  }) as Adapter,
});

export { handler as GET, handler as POST };
