import type { Adapter } from 'next-auth/adapters';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import { supabase } from '../../db';

const EMAIL_SERVER = 'smtp://mirae9873:adxvwfgfmznpuphs@smtp.gmail.com:587'; // process.env.EMAIL_SERVER;
const EMAIL_FROM = 'noreply@candypop.com'; // process.env.EMAIL_FROM;

const handler = NextAuth({
  providers: [
    EmailProvider({
      server: EMAIL_SERVER,
      from: EMAIL_FROM,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY as string,
  }) as Adapter,
});

export { handler as GET, handler as POST };
