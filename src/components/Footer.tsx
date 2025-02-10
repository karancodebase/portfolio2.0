import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between md:px-20 py-10 items-center'>
        <div>
            <p>
                &copy; {new Date().getFullYear()} All rights reserved
            </p>
        </div>
        <div>
            <p>
                Site designed and developed by <a href="https://github.com/jaydattkaran" className='font-semibold'>Jaydatt Karan</a>
            </p>
        </div>
    </div>
  )
}
