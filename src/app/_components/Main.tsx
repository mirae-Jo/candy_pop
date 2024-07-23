'use client';
import { useSession } from 'next-auth/react';
import FirstVisitor from './FirstVisitor';

const Main = () => {
  const { data: session } = useSession();
  console.log(session?.user?.name);
  const FirstVisit = () => {
    return session?.user ? <div>환영합니다</div> : <FirstVisitor />;
  };

  return <FirstVisit />;
};

export default Main;
