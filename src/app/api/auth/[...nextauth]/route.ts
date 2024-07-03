import type { Adapter } from 'next-auth/adapters';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { SupabaseAdapter } from '@auth/supabase-adapter';

const EMAIL_SERVER = process.env.EMAIL_SERVER; // process.env.EMAIL_SERVER;
const EMAIL_FROM = 'noreply@candypop.com'; // process.env.EMAIL_FROM;

const handler = NextAuth({
  providers: [
    EmailProvider({
      server: EMAIL_SERVER,
      from: EMAIL_FROM,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log(baseUrl);
      return baseUrl;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY as string,
  }) as Adapter,
});

export { handler as GET, handler as POST };
