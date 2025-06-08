"use client";
import { Delius } from 'next/font/google'

const delius = Delius({
  weight: '400',
  subsets: ['latin'],
})


const Airdrop = () => {
  return (
    <div>
      <div className={`${delius.className} md:text-xl text-neutral-300`}>Liked what you saw? Airdrop a little boost to <span className='px-2 rounded-md pb-1 bg-neutral-800 text-neutral-100'>jaydatt.sol</span> — every drop fuels the next banger.</div>
      <div className={`${delius.className} md:text-lg text-sm text-neutral-400`}>No pressure. Just good karma. 💥</div>
    </div>
  );
};

export default Airdrop;
