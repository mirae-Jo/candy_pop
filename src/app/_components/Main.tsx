'use client';
import { useSession } from 'next-auth/react';
import FirstVisitor from './FirstVisitor';

const Main = () => {
  const session = useSession();
  console.log(session);
  const FirstVisit = () => {
    return session.data ? <div>환영합니다</div> : <FirstVisitor />;
  };

  return <FirstVisit />;
};

export default Main;
