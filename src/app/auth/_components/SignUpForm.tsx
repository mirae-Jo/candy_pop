'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn('email', { email });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-[1rem]'>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='이메일을 입력해주세요'
        />
        <button className='bg-[#eee]'>이메일로 시작하기</button>
      </form>
    </>
  );
};

export default SignUpForm;
