import React from 'react'
import Image from 'next/image'

import email from '../../assets/img/footer/email.svg'
import phone from '../../assets/img/footer/phone.svg'
import insta from '../../assets/img/footer/instagram.svg'
import fb from '../../assets/img/footer/facebook.svg'

export const Footer = () => {
  return (
    <footer className='pt-[47px] pb-[67px] bg-[hsl(222.2,47.4%,11.2%)]'>
      <div className="container flex justify-between">
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <Image
              src={phone}
              alt='email'
            />
            <span className='text-white'>+39011111111</span>
          </div>
          <div className='flex gap-4 items-center'>
            <Image
              src={email}
              alt='email'
            />
            <span className='text-white'>test@gmai.com</span>
          </div>
        </div>
        <div className='flex gap-5'>
          <Image
            src={insta}
            alt='email'
          />
          <Image
            src={fb}
            alt='email'
          />
        </div>
      </div>
    </footer>
  )
}
