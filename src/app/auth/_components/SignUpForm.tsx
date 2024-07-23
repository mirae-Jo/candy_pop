'use client';

import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');

  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn('email', { email });
  };

  const handleNaverSignUpBtn = async () => {
    await signIn('naver');
  };

  const handleKakaoSignUpBtn = async () => {
    await signIn('kakao', { redirect: true, callbackUrl: '/' });
  };

  return (
    <div className='flex flex-col gap-3'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-[1rem]'>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='이메일을 입력해주세요'
        />
        <button className='bg-[#eee]'>이메일로 시작하기</button>
      </form>
      <button onClick={handleNaverSignUpBtn} className=' bg-green-500'>
        네이버로 로그인
      </button>
      <button onClick={handleKakaoSignUpBtn} className='bg-yellow-300'>
        카카오로 로그인
      </button>
    </div>
  );
};

export default SignUpForm;
