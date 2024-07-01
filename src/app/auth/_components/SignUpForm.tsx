'use client';
import { supabase } from '@/app/api/db';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const SignUpForm = () => {
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn('email', { email });
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-[1rem]'>
      <input
        value={nickname}
        onChange={(e) => setNickName(e.target.value)}
        type='text'
        placeholder='닉네임을 입력해주세요 (2~8자 이내로 작성해주세요)'
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        placeholder='이메일을 입력해주세요'
      />
      <input type='password' placeholder='비밀번호를 입력해주세요' />
      <input placeholder='비밀번호를 다시 한 번 입력해주세요' />
      <button className='bg-[#eee]'>회원가입</button>
    </form>
  );
};

export default SignUpForm;
