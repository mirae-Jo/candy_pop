import Image from 'next/image';
import React from 'react';
import candyPopLogo from '@/assets/logo.png';
import RightArrowSvg from '@/assets/RightArrowSvg';
import Link from 'next/link';

const FirstVisitor = () => {
  return (
    <div className='bg-[#FFEBF1] w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-[1.2rem]'>
        <p className='text-secondary-pink text-16px font-light'>
          한 눈에 보는 팝업스토어
        </p>
        <h1>
          <Image
            className='w-[32rem]'
            src={candyPopLogo}
            alt='candy pop logo'
            priority
          />
        </h1>
        <Link
          href={'/auth'}
          className='mt-[0.8rem] w-[32rem] h-[4.4rem] bg-secondary-pink rounded-16xl flex items-center justify-center gap-[1.5rem]'
        >
          <span className='text-24px text-white font-light'>시작하기</span>
          <RightArrowSvg />
        </Link>
      </div>
    </div>
  );
};

export default FirstVisitor;
